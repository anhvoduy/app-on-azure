const router = require('express').Router();
const moment = require('moment');
const videoService = require('../services/videoService');

router.get('/list', async function (req, res, next) {
    try 
    {
        let { pagesize, pageindex } = req.query;

        if(!pagesize || !pageindex)
            throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: pagesize or pageindex' };

        // pagesize should be beauty
        if([50, 100, 500, 1000, 1500].indexOf(parseInt(pagesize)) < 0)
            throw { code: 'INVALID_REQUIRED_FIELD', message: 'invalid required field: pagesize' };

        let employees = await videoService.getVideoListPaging(pagesize, pageindex);

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
    try 
    {
        let { emp_key } = req.query;

        if(!emp_key)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: emp_key' }            

        let empInfo = await videoService.getVideoByKey(emp_key);

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
        let { video_id, video_name } = req.body;        
        
        if(!video_id)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: video_id' }
        
        tr = await videoService.getTransaction();

        await videoService.updateVideo(tr, video_id, video_name);
        
        let empInfo = await videoService.getVideoById(tr, video_id);

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

router.post('/create', async function (req, res, next) {
    let tr;
    try
    {
        let { video_name, video_desc } = req.body;
                
        if(!video_name)
            throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: video_name' }
            
        if(!video_desc)
			throw { code: 'MISSING_REQUIRED_FIELD', message: 'missing required field: video_desc' }
        
        tr = await videoService.getTransaction();
                
        await videoService.updateVideo(tr, emp_key, teamIds);

        let empInfo = await videoService.getVideoByKey(tr, emp_key);

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