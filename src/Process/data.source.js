import React from 'react';

// 服务流程简介
export const ProcessDescDataSource = {
  wrapper: { className: 'home-page-wrapper processDesc-wrapper' },
  page: { className: 'processDesc' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '服务流程', className: 'title-h1' },
    ],
  },
  childWrapper: {
    className: 'processDesc-block-wrapper',
    children: [
      {
        name: 'block0',
        md: 24,
        className: 'processDesc-block',
        children: {
          className: 'processDesc-block-item',
          children: [
            { name: 'content', children: `太空种子Spaceed作为众筹服务项目的全称，名称用意与品牌文化和项目本身
            浑然天成。“太空”即空间Space，此空间包含众多服务，真正做到众筹服务”一站
            式“解决方案，全面服务于初创企业和孵化项目。`},
          ],
        },
      },
      {
        name: 'block1',
        md: 24,
        className: 'processDesc-block',
        children: {
          className: 'processDesc-block-item',
          children: [
            { name: 'content', children: `此外，”太空“还有高科技和超前
            技术的未来展望，对”太空“的探索，也是科技初创企业和项目，以及科技人才对
            科技的展望和追求。我们希望打造一个科技空间，在追求创新和展望未来的同时，
            能够从基础的设施上为科技团队服务。`},
          ],
        },
      },
      {
        name: 'block2',
        md: 24,
        className: 'processDesc-block',
        children: {
          className: 'processDesc-block-item',
          children: [
            { name: 'content', children: `”种子“即seed,是从一个新的创意和想法
            诞生之初，拥有萌发新芽和蓬勃向上动力的种子。我们希望对全新创意和科技想
            法在诞生之初就开始孵化，并通过不断的养育和给予，使此创意能够从扎根开始
            就立足于我们的众筹服务空间，在早期进行持续性的孵化。`},
          ],
        },
      },
      {
        name: 'block3',
        md: 24,
        className: 'processDesc-block',
        children: {
          className: 'processDesc-block-item',
          children: [
            { name: 'content', children: `我们希望我们支持和
            孵化的众筹科技产品可以最终走向成功，我们在此过程中，负责到底地不断为项
            目提供可延续性的服务，帮助项目持续性成长。`},
          ],
        },
      },
    ],
  },
};

// 服务流程
export const ProcessStepDataSource = {
  wrapper: { className: 'home-page-wrapper processStep-wrapper' },
  page: { className: 'home-page processStep' },
  OverPack: { playScale: 0.3 },
  Carousel: {
    dots: false,
    className: 'processStep-carousel',
    wrapper: { className: 'processStep-block-wrapper' },
    children: {
      className: 'processStep-block',
      titleWrapper: {
        className: 'processStep-carousel-title-wrapper',
        title: { className: 'processStep-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'processStep-block-row',
          gutter: 40,
          title: {
            className: 'processStep-carousel-title-block',
            children: '',
          },
          children: [
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '联系我们',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '拨打热线或者留言',
                  },
                ],
              },
            },
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '了解需求',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children:
                      '专员回电，了解客户需求',
                  },
                ],
              },
            },
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '项目评估',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children:
                      '评估项目周期和报价',
                  },
                ],
              },
            },
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '合作双赢',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children:
                      '签订合作协议，确定方案',
                  },
                ],
              },
            },
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '收工验收',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children:
                      '如期施工，工程验收',
                  },
                ],
              },
            },
            {
              className: 'processStep-block-col',
              md: 4,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'processStep-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '免费维护',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children:
                      '承诺首年项目免费维护',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};

// 联系我们
export const ProcessContactDataSource = {
  wrapper: { className: 'home-page-wrapper processContact-wrapper' },
  page: { className: 'home-page processContact' },
  OverPack: { playScale: 0.3 },
  block: {
    className: 'processContact-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'processContact-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'processContact-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'processContact-text' },
          title: { className: 'processContact-title', children: '拨打热线' },
          content: {
            className: 'processContact-content',
            children:
              '0778 - 8434221',
          },
        },
      },
      {
        name: 'block1',
        className: 'processContact-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'processContact-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'processContact-text' },
          title: { className: 'processContact-title', children: '我要留言' },
          content: {
            name: 'button',
            className: 'processContact-button',
            children: { href: '/contact.html#contact', target: '#contact', children: '立即留言' },
          },
        },
      },
    ],
  },
}
