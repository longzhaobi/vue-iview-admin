import request from '@/utils/request';
import qs from 'qs';

export function fetch(params) {
  return request({
    url:`/api/permissions?${qs.stringify(params)}`
  });
}

export function create(params) {
  return request({
    url:'/api/permissions',
    method:'post',
    data:qs.stringify(params)
  });
}

export function remove(params) {
  return request({
    url:`/api/permissions/${params}`,
    method:'delete'
  });
}

export function update(params) {
  return request({
    url:`/api/permissions`,
    method:'put',
    data:qs.stringify(params)
  });
}
