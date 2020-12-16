const router = require('express').Router();
const momentTz = require('moment-timezone');
const info = require('../package.json');
const baseService = require('../services/spService');

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

router.get('/sharepoint', async function (req, res, next) {
    try 
    {
        const site_info = await baseService.getSiteInfo();
        const document_info = await baseService.getDocumentList();
        res.json({
            code: true,
            site_info: site_info,
            document_info: document_info,
            version: info.version,
            time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
    } catch (err) {
        throw err;
    }    
});

module.exports = router;