import request from '@/utils/request';
import qs from 'qs';

//用户登录
export function queryList(params) {
  return request({
    url:'/api/login',
    method: 'post',
    data: qs.stringify(params)
  });
}
