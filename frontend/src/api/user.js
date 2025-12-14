import request from '@/utils/request';

// 登录接口
export function login(data) {
  return request({
    url: '/user/login', // 代理后，实际请求的 URL 是 http://localhost:8080/user/login
    method: 'post',
    data,
  });
}

// 获取用户信息接口
export function getInfo() {
  return request({
    url: '/', // 代理后，实际请求的 URL 是 http://localhost:8080/user/info
    method: 'get',
  });
}
