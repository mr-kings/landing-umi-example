import React from 'react';
import erweima from '@/assets/img/erweima.png';
// import logo from '@/assets/img/logo/logoCL.png';
import logo from '@/assets/img/logo/logol.png';

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
        md: 7,
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
        md: 10,
        className: 'block',
        title: { children: '公司信息' },
        childWrapper: {
          children: [
            { name: 'link0', children: '公司名称：江苏趣通市政工程有限公司' },
            { name: 'link1', children: '公司地址：江苏省南京市江宁区天元东路388号' },
            { name: 'link2', children: '公司邮箱：qutong13913370505@163.com' },
            { name: 'link3', children: '联系手机：13913370505' },
            { name: 'link4', children: '联系电话：025-52209660' },
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
          children: erweima,
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
        <p>
          江苏趣通市政工程有限公司 <a href="http://www.beian.miit.gov.cn" style={{marginLeft: '6px'}}>苏ICP备19066265号-1</a>
        </p>
      </>
    ),
  },
};
