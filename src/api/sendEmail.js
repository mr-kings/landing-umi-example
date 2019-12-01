import { request } from '@/api';

// 发送邮件
export const sendEmail = (params) => {
  return request.POST('http://www.kimshare.club:7002/sendEmail', params).then(res => {
    return res;
  })
}
