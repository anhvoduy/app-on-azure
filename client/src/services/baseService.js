import api, { setToken } from './api';

const baseUrl = 'https://development365.sharepoint.com/sites/develop';
const employeeList = 'Employees';

const baseService = function () {
}

baseService.getEmployee = async function(token_type, access_token) {
  let urlEmp = `${baseUrl}/_api/web/lists/GetByTitle('${employeeList}')/items?$top=10&$expand=AttachmentFiles`;
  debugger;
  setToken(token_type, access_token);
  return new Promise(function(resolve, reject) {
    api(urlEmp).then(function (res) {                
      //console.log('getEmployee:', res);
      if(res.data.d.results) resolve(res.data.d.results[0]);
      else resolve({});
    }).catch(function (err) {
      //console.log(err);
      reject(err);
    });
  });
}

export default baseService;