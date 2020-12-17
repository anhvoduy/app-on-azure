const axios = require('axios');
const qs = require('qs');

const getAccessToken = function() {    
    return new Promise(function(resolve, reject) {        
        var data = qs.stringify({
            'grant_type': 'client_credentials',
            'client_id': '5ca2f988-4d5f-49f8-be14-cdc63f0cce99@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2',
            'client_secret': 'mgJ9PfILUEpJClCeSAF8aEI3oM8ul4GyRm30vaQ7xt4=',
            'Resource': '00000003-0000-0ff1-ce00-000000000000/development365.sharepoint.com@d4961f1b-d80d-475b-a3c3-7d09b24bd5d2' 
        });

        var config = {
          method: 'post',
          url: 'https://accounts.accesscontrol.windows.net/d4961f1b-d80d-475b-a3c3-7d09b24bd5d2/tokens/OAuth/2',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            'Cookie': 'esctx=AQABAAAAAAB2UyzwtQEKR7-rWbgdcBZItLdIQ-cRCxTTxOZ4UmwsyVOi4cRuc47EunoQM6vGNHYu-aseTWqAumf14zHmXr4qGm8-2j112wYifKA-TiR4hgMpTh4OORvGvF_vid-cvD8QOCzRdzfXUPE6wR_Htuu5ZB8NbHp3arsyXSykTDYsqDQdNl_YiTG4_PTkQtrpJi4gAA; stsservicecookie=estsfd; x-ms-gateway-slice=prod; fpc=AuZzeGFWqKBDlrZ4IDb2__vW9FIiAQAAAOutbNcOAAAA'
          },
          data : data
        };

        axios(config)
        .then(function (res) {
          console.log(JSON.stringify(res.data));
          resolve(res.data)
        })
        .catch(function (err) {
          console.log(err);
          reject(err);
        });      
    });
}

module.exports = {
    getAccessToken
};