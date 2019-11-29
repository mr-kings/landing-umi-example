import React from 'react';
import blackCube from '@/assets/img/blackCube.jpeg';
import logo from '@/assets/img/logo.png';

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header home-page-wrapper' },
  page: { className: 'home-page header' },
  page2: { className: 'home-page header2' },
  logo: {
    className: 'header-logo',
    href: '/index',
    children: logo,
  },
  LinkMenu: {
    className: 'header-menu',
    children: [
        {
          name: '企业介绍',
          href: '/company',
          className: 'menu-item',
        },
        {
          name: '产品介绍',
          href: '/product',
          className: 'menu-item',
        },
        {
          name: '联系我们',
          href: '/contact',
          className: 'menu-item',
        },
      ],
  },
  mobileMenu: { className: 'header-mobile-menu' },
  menuLink: { children: [] },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block1',
        xs: 24,
        md: 7,
        className: 'block',
        title: { children: '网站导航' },
        childWrapper: {
          children: [
            { name: 'link0', href: '/company', to: '/company', children: '企业介绍' },
            { name: 'link1', href: '/product', to: '/product',  children: '产品介绍' },
            { name: 'link5', href: '/contact', to: '/contact',  children: '联系我们' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 10,
        className: 'block',
        title: { children: '企业信息' },
        childWrapper: {
          children: [
            { name: 'link0', children: '企业名称：帕利国际科技（深圳）有限公司' },
            { name: 'link1', children: '企业地址：广东省深圳市福田区市花路南侧长富金茂大厦1号楼303' },
            { name: 'link2', children: '联系电话：+86 134 8074 4769' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 7,
        className: 'block',
        title: {
          className: 'image',
          isimg: 'true',
          children: blackCube,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: '关注我们',
              children: '扫码关注',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <p>
          Copyright ©2019 Powered By spaceed Version 1.0.0
        </p>
        <p>
          <a href="http://www.beian.miit.gov.cn" style={{marginLeft: '6px'}}>粤ICP备19066266号</a>
        </p>
      </>
    ),
  },
};
