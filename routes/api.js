const router = require('express').Router();
const momentTz = require('moment-timezone');
const info = require('../package.json');
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

module.exports = router;