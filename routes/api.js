const router = require('express').Router();
const momentTz = require('moment-timezone');
const info = require('../package.json');

router.get('/status', function (req, res, next) {
    res.json({
        code: true,
        message: 'GET(): Success',
        version: info.version,
        web_info: process.env.WEB_INFO,
        time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

router.post('/status', function (req, res, next) {
    res.json({
        code: true,
        message: 'POST(): Success',
        body: req.body,
        version: info.version,
        time: momentTz(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

module.exports = router;