import api from './api';
import _ from 'lodash';

const videoService = function() {
}

videoService.status = function() {
  let url = '/v1/api/connection';
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
  let url = `/v1/api/video/list?pagesize=${pageSize}&pageindex=${pageIndex}`;
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res.data;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

videoService.getVideoByKey = function(key) {
  let url = `/v1/api/video/item?video_key=${key}`;
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res.data;
      if(Array.isArray(data) && data.length) resolve(data[0]);
      else resolve({});
    }).catch(function(err) {
      reject(err);
    });
  });
}

videoService.getCategoryList = function() {
  let url = '/v1/api/video/category';
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res.data;
      if(Array.isArray(data) && data.length) {
        forEach(data, item => {
          item.value = item.VideoCategoryId;
          item.label = item.VideoCategoryName;
        });
      }
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default videoService;