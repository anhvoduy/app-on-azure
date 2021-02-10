import api from './api';

const courseService = function() {
}

courseService.status = function() {
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

courseService.getCourses = function(pageSize, pageIndex) {
  let url = `/v1/api/course/list?pagesize=${pageSize}&pageindex=${pageIndex}`;
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res.data;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

courseService.getCourseByKey = function(key) {
  let url = `/v1/api/course/item?course_key=${key}`;
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

courseService.updateCourse = function(course_key, course_name, course_desc) {
  let url = '/v1/api/course/item';
  let reqInfo = { course_key, course_name, course_desc };
  return new Promise(function(resolve, reject) {
    api.post(url, reqInfo).then(function(res) {
      let { data } = res.data;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default courseService;