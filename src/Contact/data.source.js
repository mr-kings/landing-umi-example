import React from 'react';
import blackCube from '@/assets/img/blackCube.jpeg';
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
      url: { children: 'https://gaode.com/place/B0FFG9KCSR', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '广东省深圳市南山区前海深港青年梦工场6栋B座206室',
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
              children: '请输入您的相关信息发送给我们，我们将会在24小时内回复您！请认准我们的回电号码：***********',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '公司名称：金服科技有限公司',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系人：***先生',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系电话：0778 - 8434221',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '电子邮箱：kimshareclub@gmail.com',
            },
            {
              name: 'image',
              className: 'contact-block-img',
              children: '关注我们：',
              src: blackCube,
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


