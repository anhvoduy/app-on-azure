import api from './api';

const videoService = function() {
}

videoService.status = function() {
  let url = '/api/connection';
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

videoService.getList = function(pageSize, pageIndex) {
  let url = `/api/video/list?pagesize=${pageSize}&pageindex=${pageIndex}`;
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res.data;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default videoService;