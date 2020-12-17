const router = require('express').Router();
const momentTz = require('moment-timezone');
const info = require('../package.json');
const pnpService = require('../services/pnpService');
const authService = require('../services/authService');

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

module.exports = router;