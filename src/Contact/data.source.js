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
      url: { children: 'https://ditu.amap.com/place/B0FFH6CAOB', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '中国广东省深圳市福田区市花路南侧长富金茂大厦1号楼303',
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
        name: 'block1',
        className: 'contact-block contact-block-two',
        md: 24,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [ ],
        },
      },
    ],
  },
};


