const router = require('express').Router();
const empService = require('../services/empService');

router.get('/list', async function (req, res, next) {
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

router.get('/item', async function (req, res, next) {
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

router.post('/item', async function (req, res, next) {
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

router.post('/assign', async function (req, res, next) {
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

module.exports = router;