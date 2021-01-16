require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// setup express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup app
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.set('secretKey', process.env.SECRET_KEY || 'i-love-sharepoint');

// setup api as /v1/api
app.use('/v1/api', require('./routes/api'));
app.use('/v1/api/employee', require('./routes/employee'));
app.use('/v1/api/course', require('./routes/course'));

// setup web site
const siteApp = path.join(__dirname, 'client/build');
app.use('/', express.static(siteApp, { index: 'index.html '}));
app.get(['/', '/*'], function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = app.get('port');
const HOST = app.get('host');
app.listen(PORT, function () {
    console.log('Web & API is running on port: %s - host: %s by nodejs version: %s', PORT, HOST, process.version);
});