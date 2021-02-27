import sp_api, { setToken } from './sp_api';

const baseUrl = 'https://development365.sharepoint.com/sites/develop';
const employeeList = 'Employees';

const sp_service = function () {
}

sp_service.getEmployee = async function(token_type, access_token) {
  let urlEmp = `${baseUrl}/_api/web/lists/GetByTitle('${employeeList}')/items?$top=10&$expand=AttachmentFiles`;
  setToken(token_type, access_token);
  return new Promise(function(resolve, reject) {
    sp_api(urlEmp).then(function (res) {
      if(res.data.d.results) resolve(res.data.d.results[0]);
      else resolve({});
    }).catch(function (err) {      
      reject(err);
    });
  });
}

export default sp_service;