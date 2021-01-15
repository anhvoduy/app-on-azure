const router = require('express').Router();
const momentTz = require('moment-timezone');
const info = require('../package.json');
const pnpService = require('../services/pnpService');
const authService = require('../services/authService');
const empService = require('../services/empService');

router.get('/status', function (req, res, next) {
    res.json({
        code: true,
        version: info.version,
        web_info: process.env.WEB_INFO,
        time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

router.post('/status', function (req, res, next) {
    res.json({
        code: true,
        body: req.body,
        version: info.version,
        time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

router.get('/site_info', async function (req, res, next) {
    try 
    {
        const site_info = await pnpService.getSiteInfo();
        res.json({
            code: true,
            site_info: site_info,
            version: info.version,
            time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
    } catch (err) {
        throw err;
    }
});

router.get('/doc_info', async function (req, res, next) {
    try 
    {
        const doc_info = await pnpService.getDocumentList();
        res.json({
            code: true,
            doc_info: doc_info,
            version: info.version,
            time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
    } catch (err) {
        throw err;
    }
});

router.get('/access_token', async function (req, res, next) {
    try 
    {
        const data = await authService.getAccessToken();
        res.json({
            code: true,
            data: data,
            version: info.version,
            time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
    } catch (err) {
        throw err;
    }
});


/* access database */
router.get('/connection', async function (req, res, next) {
    try 
    {
        await empService.getTransaction();
        return res.json({
            code: true,
            message: 'SQL DB is Connected'
        });
    }
    catch (err) {
        console.log('-err-', err);
        next({ code: false, message: 'Can NOT connect to SQL DB'});
    }
});

router.get('/employees', async function (req, res, next) {
    try 
    {
        let { pagesize, pageindex } = req.query;

        if(!pagesize || !pageindex)
            throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: pagesize or pageindex' };

        // pagesize should be beauty
        if([100, 500, 1000, 1500].indexOf(parseInt(pagesize)) < 0)
            throw { code: 'INVALID_REQUIRED_FIELD', message: 'invalid required field: pagesize' };

        let employees = await empService.getEmployeeListPaging(pagesize, pageindex);

        return res.json({
            code: true,
            data: employees
        });
    }
    catch (err) {
        next({ code: false, message: 'Can NOT query table Employee'});
    }
});

router.get('/employees/item', async function (req, res, next) {
    let tr;
    try 
    {
        let { emp_key } = req.query;

        if(!emp_key)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: emp_key' }
        
        tr = await empService.getTransaction();

        let empInfo = await empService.getEmployeeByKey(tr, emp_key);

        tr.commit();
        return res.json({
            code: true,
            data: empInfo
        });
    }
    catch (err) {
        if(tr) tr.rollback();
        next({ code: false, message: 'Can NOT query table Employee'});
    }
});

router.post('/employees/item', async function (req, res, next) {
    let tr;
    try 
    {
        let { emp_key, emp_name } = req.body;        
        
        if(!emp_key)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: emp_key' }
        
        tr = await empService.getTransaction();

        await empService.updateEmployee(tr, emp_key, emp_name);
        
        let empInfo = await empService.getEmployeeByKey(tr, emp_key);

        tr.commit();
        return res.json({
            code: true,
            data: empInfo
        });
    }
    catch (err) {
        if(tr) tr.rollback();
        next({ code: false, message: 'Can NOT query table Employee'});
    }
});

router.post('/employees/assign', async function (req, res, next) {
    let tr;
    try
    {
        let { emp_key, teamIds } = req.body;
                
        if(!emp_key)
            throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: emp_key' }
            
        if(!teamIds)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: teamIds' }
        
        tr = await empService.getTransaction();
                
        await empService.assignEmployee(tr, emp_key, teamIds);

        let empInfo = await empService.getEmployeeByKey(tr, emp_key);

        tr.commit();
        return res.json({
            code: true,
            data: empInfo
        });
    }
    catch (err) {
        if(tr) tr.rollback();
        next({ code: false, message: 'Can NOT query table Employee'});
    }
});

router.get('/teams', async function (req, res, next) {
    try
    {
        let teams = await empService.getTeamList();
        return res.json({
            code: true,
            data: teams
        });
    }
    catch (err) {
        next({ code: false, message: 'Can NOT query table Team'});
    }
});

router.get('/departments', async function (req, res, next) {
    try
    {
        let departments = await empService.getDepartmentList();
        return res.json({
            code: true,
            data: departments
        });
    }
    catch (err) {
        next({ code: false, message: 'Can NOT query table Department'});
    }
});

router.get('/directors', async function (req, res, next) {
    try 
    {        
        let directors = await empService.getDirectorList();     
        return res.json({
            code: true,
            data: directors
        });
    }
    catch (err) {
        next({ code: false, message: 'Can NOT query table Directors'});
    }
});

module.exports = router;