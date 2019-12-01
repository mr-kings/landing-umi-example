'use strict';

const Controller = require('egg').Controller;

class SendEmailController extends Controller {
  async sendEmail() {
    const { ctx } = this;
    const data = ctx.request.body;
    let result = { code: '400', msg: '请检查是否按要求填写！' };
    if (data && Object.keys(data).length > 0) {
      const text = `客户姓名：${data.username}<br/>
                    手机号码：${data.phone}<br/>
                    电子邮箱：${data.email}<br/>
                    公司名称：${data.company}<br/>
                    所在区域：${data.area}<br/>
                    问题描述：${data.description}`;
      result = await ctx.service.sendEmail.sendEmail(text);
    }
    ctx.body = result;
  }
}

module.exports = SendEmailController;
