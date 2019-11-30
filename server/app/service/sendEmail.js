'use strict';

const Service = require('egg').Service;
const nodemailer = require('nodemailer');

class SendEmailService extends Service {
  // eslint-disable-next-line class-methods-use-this
  async sendEmail(data) {
    const response = {
      code: '200',
      msg: '恭喜您发送成功!',
    };
    return new Promise((resolve, reject) => {
      nodemailer.createTestAccount(() => {
        // 填入自己的账号和密码
        const transporter = nodemailer.createTransport({
          host: 'smtp.163.com',
          port: 465,
          secure: true,
          auth: {
            user: '18576648902@163.com',
            pass: 'P@ssw0rd',
          },
        });
        // 填写发件人, 收件人
        const mailOptions = {
          // 发件人地址
          from: '18576648902@163.com',
          // 收件人列表, 向163邮箱, gmail邮箱, qq邮箱各发一封
          to: 'qutong13913370505@163.com, 18576648902@163.com',
          // 邮件主题
          subject: '官网留言邮件',
          // 文字内容
          text: data,
          // html内容
          html: '<b>' + data + '</b>',
        };
        // 发送邮件
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            response.code = '400';
            response.msg = '抱歉发送失败，请稍后重试！';
            reject();
          }
          console.log(info);
          resolve();
        });
      });
    }).then(() => {
      return response;
    }).catch(err => {
      console.log(err);
      return response;
    });
  }
}

module.exports = SendEmailService;
