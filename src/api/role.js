import request from '@/utils/request';
import qs from 'qs';

export function fetch(params) {
  return request({
    url:`/api/roles?${qs.stringify(params)}`
  });
}

export function create(params) {
  return request({
    url:'/api/roles',
    method:'post',
    data:qs.stringify(params)
  });
}

export function remove(params) {
  return request({
    url:`/api/roles/${params}`,
    method:'delete'
  });
}

export function update(params) {
  return request({
    url:`/api/roles`,
    method:'put',
    data:qs.stringify(params)
  });
}
