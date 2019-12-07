import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,Form,Input,Button,message } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils/utils';
import { sendEmail } from '@/api/sendEmail';
class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  getChildrenToRender2 = (data) => {
    return data.map((block, i) => {
      const { children: item, ...blockProps } = block;
      if (block.name === 'block1') {
        return <Col key={i.toString()} {...blockProps}>{this.getChildrenToForm()}</Col>;
      } else {
        return (
          <Col key={i.toString()} {...blockProps}>
            <div {...item}>
              {item.children.map((child, index) => {
                return child.name === 'image' ?
                  <div key={index.toString()} className={child.className} >
                    <p>{child.children}</p>
                    <img src={child.src} alt="二维码" />
                  </div> :
                  <div key={index.toString()} {...child}>
                    {
                      child.label ? <>
                      <span dangerouslySetInnerHTML={{__html: `<span>${child.label}</span>`}}></span>
                      <span>{child.children}</span>
                      </> : child.children
                    }

                  </div>
              })}
            </div>
          </Col>
        );
      }
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      this.setState({
        loading: true
      })
      // 发送邮件
      sendEmail(fieldsValue).then(res => {
        if (res.code === '200') {
          message.success(res.msg);
          this.handleReset();
        } else {
          message.error(res.msg);
        }
        this.setState({
          loading: false
        })
      }).catch(err => {
        console.log(err)
        this.setState({
          loading: false
        })
      })
    });
  };

  // 重置
  handleReset = () => {
    this.props.form.resetFields();
  };

  // 生成表单
  getChildrenToForm = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      labelAlign: 'right'
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="您的姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          })(<Input maxLength={10} placeholder="请输入您的姓名" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="手机号码">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入您的手机号码',
              },
            ],
          })(<Input placeholder="请输入您的手机号码" maxLength={11} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="电子邮箱">
          {getFieldDecorator('email', {
            rules: [
              {
                required: false,
                message: '请输入您的电子邮箱',
              },
            ],
          })(<Input placeholder="请输入您的电子邮箱" maxLength={30} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="公司名称">
          {getFieldDecorator('company', {
            rules: [
              {
                required: false,
                message: '请输入您的公司名称',
              },
            ],
          })(<Input placeholder="请输入您的公司名称" maxLength={30}/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="所在区域">
          {getFieldDecorator('area', {
            rules: [
              {
                required: false,
                message: '请输入您的所在区域',
              },
            ],
          })(<Input placeholder="请输入您的所在区域" maxLength={50}/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="问题描述">
          {getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: '请输入您的问题描述',
              },
            ],
          })(<Input.TextArea maxLength={200} rows={5} placeholder="请输入您的问题描述" />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 18, offset: 6 },
          }}
          style={{ marginBottom: '0px'}}
        >
          <Button loading={this.state.loading} disabled={this.state.loading} type="primary" htmlType="submit" style={{margin: '0 20px'}}>
            发送
          </Button>
          <Button onClick={this.handleReset} style={{margin: '0 20px'}}>
            重置
          </Button>
        </Form.Item>
      </Form>
    )
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;

    const childrenToRender = this.getChildrenToRender2(
      childWrapper.children
    );

    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childrenToRender}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Form.create()(Contact);
