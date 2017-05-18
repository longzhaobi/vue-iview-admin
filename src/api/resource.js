import request from '@/utils/request';
import qs from 'qs';

export function fetch(params) {
  return request({
    url:`/api/resources?${qs.stringify(params)}`
  });
}

export function create(params) {
  return request({
    url:'/api/resources',
    method:'post',
    data:qs.stringify(params)
  });
}

export function update(params) {
  return request({
    url:`/api/resources`,
    method:'put',
    data:qs.stringify(params)
  });
}

export function remove(params) {
  return request({
    url:`/api/resources/${params}`,
    method:'delete'
  });
}

export function fetchPermission() {
  return request({
    url:'/api/permissions/init'
  });
}
