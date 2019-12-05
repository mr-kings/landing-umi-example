import React from 'react';
import erweima from '@/assets/img/erweima.png';
import bg from '@/assets/img/qianhaiditu.png';

// 公司地址
export const PositionDataSource = {
  wrapper: { className: 'home-page-wrapper position-wrapper' },
  page: { className: 'home-page position' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '公司地址',
        className: 'title-h1',
      },
    ],
  },
  wrapper2: { className: 'home-page-wrapper position-wrapper2',bg: bg, },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://ditu.amap.com/place/B0FFG4H6N0', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '江苏省南京市江宁区天元东路388号',
        name: '弹框内容',
      },
    },
  },
};

// 联系我们
export const ContactDataSource = {
  wrapper: { className: 'home-page-wrapper contact-wrapper' },
  page: { className: 'home-page contact' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>联系我们</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'contact-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'contact-block',
        md: 10,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [
            {
              name: 'content',
              className: 'contact-block-label contact-block-label-tip',
              children: '请在留言区输入您的相关信息和咨询的问题，发送留言给我们，我们会在24小时内回电您，请认准我们的回电号码：13913370505 / 025-52209660',
            },
            {
              name: 'content',
              className: 'contact-block-label company',
              children: '江苏趣通市政工程有限公司',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              label: '联系人：',
              children: '徐经理',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              label: '手&nbsp;&nbsp;&nbsp;&nbsp;机：',
              children: '13913370505',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              label: '电&nbsp;&nbsp;&nbsp;&nbsp;话：',
              children: '025-52209660',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              label: '邮&nbsp;&nbsp;&nbsp;&nbsp;箱：',
              children: 'qutong13913370505@163.com',
            },
            {
              name: 'image',
              className: 'contact-block-img',
              children: '微信扫码 快速咨询：',
              src: erweima,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'contact-block contact-block-two',
        md: 14,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [ ],
        },
      },
    ],
  },
};


