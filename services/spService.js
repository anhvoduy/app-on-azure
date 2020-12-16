const sp_common = require('@pnp/sp-commonjs');
const node_common = require('@pnp/nodejs-commonjs');
const fnc = require('./config');

const baseService = function() {
}

baseService.getSiteInfo = function() {
    return new Promise(function(resolve, reject) {
        sp_common.sp.setup({
            sp: {
                fetchClientFactory: () => {
                    return new node_common.SPFetchClient(fnc.site_url, fnc.client_id, fnc.client_secret);
                },
            },
        });
        sp_common.sp.web.select("Title", "Description").get()
        .then((data) => {
            console.log(JSON.stringify(data, null, 4));
            resolve(data);
        }, (err) => {
            console.log('- ERROR:', err);
            reject(err);
        });        
    });
}

module.exports = baseService;