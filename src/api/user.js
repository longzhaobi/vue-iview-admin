import request from '@/utils/request';
import qs from 'qs';

//用户登录
export function login(params) {
  return request({
    url:'/api/login',
    method: 'post',
    data: qs.stringify(params)
  });
}

export function getUserInfoByToken(params) {
  return request({
    url:`/api/users/getUserInfoByToken?${qs.stringify(params)}`
  });
}

export function fetch(params) {
  return request({
    url:`/api/users?${qs.stringify(params)}`
  });
}
