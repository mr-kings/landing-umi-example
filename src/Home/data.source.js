import React from 'react';
import company from '@/assets/img/company.jpg';
import product from '@/assets/img/product.jpg';

// 轮播图
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    autoPlay: true,
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};

// 关于我们
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper about-wrapper' },
  page: { className: 'home-page about' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>关于我们</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'about-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'about-block',
        md: 12,
        xs: 24,
        children: {
          className: 'about-block-item',
          href: '/company.html',
          children: [
            {
              name: 'image',
              className: 'about-block-icon',
              children: company,
            },
            {
              name: 'title',
              className: 'about-block-title',
              children: '企业介绍',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'about-block',
        md: 12,
        xs: 24,
        children: {
          className: 'about-block-item',
          href: '/product.html',
          children: [
            {
              name: 'image',
              className: 'about-block-icon',
              children: product,
            },
            {
              name: 'title',
              className: 'about-block-title',
              children: '产品介绍',
            },
          ],
        },
      },
    ],
  },
};

