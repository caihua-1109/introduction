import request from '../utils/request'

/**
 * 发送留言
 */
export const sendIntroMessage = (data: any) => {
  return request({
    url:'/intro/addMessage',
    method: 'post',
    data
  })
}

