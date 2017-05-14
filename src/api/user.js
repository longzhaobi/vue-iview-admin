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

export function create(params) {
  return request({
    url:'/api/users',
    method:'post',
    data:qs.stringify(params)
  });
}

export function remove(params) {
  return request({
    url:`/api/users/${params}`,
    method:'delete'
  });
}

export function fetchRoles() {
  return request({
    url:'/api/roles/all'
  });
}

export function auth(id, params) {
  return request({
    url:`api/auths/allot/${id}`,
    method:'post',
    data:qs.stringify(params)
  });
}

export function update(params) {
  return request({
    url:`/api/users`,
    method:'put',
    data:qs.stringify(params)
  });
}
