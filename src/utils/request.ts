import axios from 'axios';

import { checkStatus } from './helper/checkStatus';
import { AxiosCanceler } from './helper/axiosCancel';
const message = {
  error: (msg: string) => {
    console.log(msg);
    alert(msg);
  },
};
const axiosCanceler = new AxiosCanceler();
let configTemp: any = '';
const request = axios.create({
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: "/api",
  timeout: 60000, // 请求超时时间
  // 跨域时候允许携带凭证
  withCredentials: true,
});
// 请求拦截器
request.interceptors.request.use(
  (config: any) => {
    // * 将当前请求添加到 pending 中
    axiosCanceler.addPending(config);

    configTemp = config;
    const token = localStorage.getItem('accessToken');
    if (!config.headers.Authorization && token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    // if (res.code === ResultEnum.OVERDUE) {
    //   message.error(res.msg)
    //   window.location.hash = '/login'
    //   return Promise.reject(res)
    // }
    // // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
    // if (res.code && res.code !== ResultEnum.SUCCESS) {
    //   message.error(res.msg)
    //   message.error('接口出错了，服务器返回状态不是200')
    //   return Promise.reject('服务器返回状态不是200')
    // }
    return res;
  },
  error => {
    const { response } = error;
    // 请求超时单独判断，请求超时没有 response
    if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试');
    // 根据响应的错误状态码，做不同的处理
    if (response) checkStatus(response.status);

    return Promise.reject(error);
  }
);

export default request;
