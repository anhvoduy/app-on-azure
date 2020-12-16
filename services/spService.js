import fnc from './config';
import sp_common from '@pnp/sp-commonjs';
import node_common from '@pnp/nodejs-commonjs';

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

export default {
    getSiteInfo,
    getDocumentList
};