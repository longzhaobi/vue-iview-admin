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

//获取资源和权限表头
export function fetchResources() {
  return request({
    url:'/api/resources'
  });
}

export function fetchColumns() {
  return request({
    url:'api/permissions/columns'
  });
}
export function queryAuth(params) {
  return request({
    url:`api/resources/auth?${qs.stringify(params)}`
  });
}
