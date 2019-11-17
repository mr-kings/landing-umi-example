import React from 'react';
import spaceed from '@/assets/img/spaceed.jpeg';
import blackCube from '@/assets/img/blackCube.jpeg';
import logo from '@/assets/img/SpaceedLogo(LR).png';

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header home-page-wrapper' },
  page: { className: 'home-page header' },
  logo: {
    className: 'header-logo',
    href: '/index',
    children: 'https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg',
    name: 'LANDING'
  },
  LinkMenu: {
    className: 'header-menu',
    children: [
      {
        name: '公司首页',
        href: '/index',
        className: 'menu-item',
      },
      {
        name: '关于我们',
        href: '/about',
        className: 'menu-item',
      },
      {
        name: '服务项目',
        href: '/service',
        className: 'menu-item',
      },
      {
        name: '工程案列',
        href: '/case',
        className: 'menu-item',
      },
      {
        name: '服务流程',
        href: '/process',
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
        md: 6,
        className: 'block',
        title: { children: '网站导航' },
        childWrapper: {
          children: [
            { name: 'link0', href: '/index', to: '/index', children: '网站首页' },
            { name: 'link1', href: '/about', to: '/about',  children: '关于我们' },
            { name: 'link2', href: '/service', to: '/service',  children: '服务项目' },
            { name: 'link3', href: '/case', to: '/case', children: '工程案列' },
            { name: 'link4', href: '/process', to: '/process',  children: '服务流程' },
            { name: 'link5', href: '/contact', to: '/contact',  children: '联系我们' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 12,
        className: 'block',
        title: { children: '公司信息' },
        childWrapper: {
          children: [
            { name: 'link0', children: '公司名称：金服科技有限公司' },
            { name: 'link1', children: '公司地址：广东省深圳市南山区前海路1号' },
            { name: 'link2', children: '公司电话：0778 - 8434221' },
            { name: 'link3', children: '公司邮箱：kimshareclub@gmail.com' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          isimg: 'true',
          children: blackCube,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: '关注我们',
              children: '快捷通道 扫码关注',
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
        <span>
          Copyright ©2019 Powered By Kimshare Version 1.0.0
        </span>
        <a href="http://www.miitbeian.gov.cn/" style={{marginLeft: '6px'}}>粤ICP备18059926号</a>
      </>
    ),
  },
};
