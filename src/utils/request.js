import axios from 'axios';
import NProgress from 'nprogress'
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;

}

export default function request(config = {}) {
  return axios.request(Object.assign(config))
  .then(checkStatus)
  .catch((error) => {
    alert(error)
  });
}

//请求前和请求结束的拦截器
axios.interceptors.request.use(function (config) {
  NProgress.start()
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  NProgress.done()//结束进度条
  return response;
}, function (error) {
  return Promise.reject(error);
});
