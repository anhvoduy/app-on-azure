import axios from 'axios';

const authService = function () {
}

authService.getAccessToken = function() {    
  let urlToken = (process.env.NODE_ENV === 'development') 
    ? 'http://localhost:3000/v1/api/access_token'
    : '/v1/api/access_token';
  
  return new Promise(function(resolve, reject) {
    axios(urlToken)
      .then(function (res) {        
        //console.log('getAccessToken:', JSON.stringify(res));
        resolve(res.data.data);
      })
      .catch(function (err) {
        //console.log(err);
        reject(err);
      });
  });
}

export default authService;