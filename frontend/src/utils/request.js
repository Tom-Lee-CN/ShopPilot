import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // 我们将 baseURL 设置为 '/api'，并使用 Vite 的代理功能来转发请求
  // 这样可以避免开发时的跨域问题
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，从 Pinia store 或 localStorage 获取 token 并添加到请求头
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // 我们通常只需要后端返回的 data 部分
    const res = response.data;

    // 这里可以根据后端返回的自定义状态码进行统一的错误处理
    // if (res.code !== 200) { ... }
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Axios response error: ' + error); // for debug
    // 这里可以统一处理 HTTP 状态码错误
    return Promise.reject(error);
  },
);

export default service;
