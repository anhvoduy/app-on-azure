const spCommon = require('@pnp/sp-commonjs');
const nodeCommon = require('@pnp/nodejs-commonjs');

const baseService = function() {    
}

baseService.getData = function() {
let url = `/getTicketsWithStatus`;
return fetch(url)
``.then(res => {
    const tickets = res.data.data.results;
    return tickets;
}).catch(err => {
    throw err;
});
}

export default baseService;