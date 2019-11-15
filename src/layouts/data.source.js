import React from 'react';
import spaceed from '@/assets/img/spaceed.jpeg';
import blackCube from '@/assets/img/blackCube.jpeg';
import logo from '@/assets/img/SpaceedLogo(LR).png';

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    href: '/index',
    children: logo,
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: '团队力量',
        href: '/team',
        className: 'menu-item',
        childrens: [{
          name: '公司简介',
          to: 'ideal',
          className: 'child-menu-item',
        },{
          name: '发展历程',
          to: 'development',
          className: 'child-menu-item',
        },{
          name: '社会责任',
          to: 'responsibility',
          className: 'child-menu-item',
        },{
          name: '团队文化',
          to: 'culture',
          className: 'child-menu-item',
        },{
          name: '团队成员',
          to: 'managment',
          className: 'child-menu-item',
        }]
      },
      {
        name: '合作伙伴',
        href: '/partners',
        className: 'menu-item',
        childrens: [{
          name: '合作企业目录',
          to: 'Banner1_0',
          className: 'child-menu-item',
        },{
          name: '最新合作企业',
          to: 'Banner1_1',
          className: 'child-menu-item',
        },{
          name: '金牌合作企业',
          to: 'Banner1_0',
          className: 'child-menu-item',
        }]
      },
      {
        name: '新闻动态',
        href: '/news',
        className: 'menu-item',
      },
      {
        name: '明日计划',
        href: '/plans',
        className: 'menu-item',
      },
      {
        name: '联系我们',
        href: '/contact',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
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
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '' },
        childWrapper: {
          children: []
        }
      },
      {
        name: 'block1',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: '导航' },
        childWrapper: {
          children: [
            { name: 'link0', href: '/team', to: '/team', children: '团队力量' },
            { name: 'link1', href: '/partners', to: '/partners',  children: '合作伙伴' },
            { name: 'link2', href: '/news', to: '/news',  children: '新闻动态' },
            { name: 'link3', href: '/plans', to: '/plans',  children: '明天计划' },
            { name: 'link4', href: '/contact', to: '/contact',  children: '联系我们' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 4,
        className: 'block',
        title: {
          className: 'logo',
          isimg: 'true',
          children: spaceed,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: '关注我们',
              children: '太空种子公众号',
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 4,
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
              children: '黑方科技公众号',
            },
          ],
        },
      },
      {
        name: 'block4',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '' },
        childWrapper: {
          children: []
        }
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
          ©2019 粤ICP备14000000号-1 / 粤
        </span>
      </>
    ),
  },
};
