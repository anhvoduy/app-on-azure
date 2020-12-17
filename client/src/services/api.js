import axios from 'axios';
const baseUrl = 'https://development365.sharepoint.com/sites/develop';

export const getAccessToken = function() {    
  return new Promise(function(resolve, reject) {
    axios('http://localhost:3000/v1/api/access_token')
      .then(function (res) {        
        console.log('getAccessToken:', JSON.stringify(res));
        resolve(res);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
}

export const getEmployee = function() {
  return new Promise(function(resolve, reject) {
    axios(`${baseUrl}/_api/web/lists/GetByTitle('Employees')/items?$top=10&$expand=AttachmentFiles`, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVPZjlQNUY5Z0NDd0NtRjJCT0hIeEREUS1EayIsImtpZCI6IjVPZjlQNUY5Z0NDd0NtRjJCT0hIeEREUS1EayJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZGV2ZWxvcG1lbnQzNjUuc2hhcmVwb2ludC5jb21AZDQ5NjFmMWItZDgwZC00NzViLWEzYzMtN2QwOWIyNGJkNWQyIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGQ0OTYxZjFiLWQ4MGQtNDc1Yi1hM2MzLTdkMDliMjRiZDVkMiIsImlhdCI6MTYwODE2ODg5NSwibmJmIjoxNjA4MTY4ODk1LCJleHAiOjE2MDgyNTU1OTUsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAZDQ5NjFmMWItZDgwZC00NzViLWEzYzMtN2QwOWIyNGJkNWQyIiwibmFtZWlkIjoiNWNhMmY5ODgtNGQ1Zi00OWY4LWJlMTQtY2RjNjNmMGNjZTk5QGQ0OTYxZjFiLWQ4MGQtNDc1Yi1hM2MzLTdkMDliMjRiZDVkMiIsIm9pZCI6Ijk2MWI5YzM2LTQyYTctNGQ4Yy05ZTg4LTRjMGIxNzczMWYwNiIsInN1YiI6Ijk2MWI5YzM2LTQyYTctNGQ4Yy05ZTg4LTRjMGIxNzczMWYwNiIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.qna2bOeZMQnjYY3VhQ2hOPYycSrIcA0-pRBhEu9aA3Uy9D6Dgn-9aYo83FTEYvfzv1TBHJn-LeWZBqZcbQS3WPkyJzFL_3h3WQx6T8iaVFndnd90IGLglPF0nhVXS74UgObnNQOlNHzHt4Z2ccV98hAvgFqLED2iCnStDOi3EzcaT0kHXnfJczO6Zq-le3sQF4fVyN3IJvlmWdi1Kc3_yoHQYxgNMyGj7LGZQRgeKogEftz7tuMeM6MxynZ0XVhBZhOYRPPCVNczoDedhLX_8hTGKZUl9dRzlcA4R_L59yz2fG1wKZmKEE3BnvCkqP7M1j_e4Vw26eb1VD_F5uWO1Q',
        'Accept': 'application/json;odata=verbose'
      }
    }).then(function (res) {                
        console.log('getEmployee:', res);
        if(res.data.d.results) resolve(res.data.d.results[0]);
        else resolve({});
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
}
