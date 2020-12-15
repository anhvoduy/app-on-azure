const { filter } = require('lodash');
const request = require('request');
const fnc = require('./config');

const baseService = function() {    
}

baseService.getSbvExchange = function() {
    let url = fnc.sbv;
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if(err) reject(err);
            else resolve(body);
        });
    });
}

module.exports = baseService;