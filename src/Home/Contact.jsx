import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,Form,Input,Button } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils/utils';

class Contact extends React.PureComponent {
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
                return child.src ? <img key={index.toString()} {...child} alt="二维码" /> : <div key={index.toString()} {...child}>{child.children}</div>
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
      // Should format date value before submit.
      console.log('Received values of form: ', fieldsValue);
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
        <Form.Item {...formItemLayout} label="姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          })(<Input maxLength={10} placeholder="请输入您的姓名" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="手机">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入您的手机号码',
              },
            ],
          })(<Input placeholder="请输入您的手机号码" maxLength={11} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="邮箱">
          {getFieldDecorator('emaill', {
            rules: [
              {
                required: false,
                message: '请输入您的邮箱',
              },
            ],
          })(<Input placeholder="请输入您的邮箱" maxLength={30}/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="问题描述">
          {getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: '请输入您的问题描述',
              },
            ],
          })(<Input.TextArea maxLength={200} autoSize={{ minRows: 5, maxRows: 6 }} placeholder="请输入您的问题描述" />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 18, offset: 6 },
          }}
          style={{ marginBottom: '0px'}}
        >
          <Button type="primary" htmlType="submit" style={{margin: '0 20px'}}>
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
