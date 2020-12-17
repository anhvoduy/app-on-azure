const sp_common = require('@pnp/sp-commonjs');
const node_common = require('@pnp/nodejs-commonjs');

const fnc = {
    site_url: 'https://development365.sharepoint.com/sites/develop/',
    client_id: '5ca2f988-4d5f-49f8-be14-cdc63f0cce99',
    client_secret: 'mgJ9PfILUEpJClCeSAF8aEI3oM8ul4GyRm30vaQ7xt4='
}

sp_common.sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new node_common.SPFetchClient(fnc.site_url, fnc.client_id, fnc.client_secret);
        },
    },
});

const getSiteInfo = function() {
    return new Promise(function(resolve, reject) {        
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

const getDocumentList = function() {
    return new Promise(function(resolve, reject) {        
        sp_common.sp.web.getList('/sites/develop/Shared%20Documents/').get()
        .then((data) => {
            console.log(JSON.stringify(data, null, 4));
            resolve(data);
        }, (err) => {
            console.log('- ERROR:', err);
            reject(err);
        });        
    });
}

module.exports = {
    getSiteInfo,
    getDocumentList
};