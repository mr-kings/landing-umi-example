import React from 'react';


// 公司简介
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper aboutModule-wrapper' },
  page: { className: 'aboutModule' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '公司简介', className: 'title-h1' },
    ],
  },
  childWrapper: {
    className: 'aboutModule-block-wrapper',
    children: [
      {
        name: 'block0',
        md: 24,
        className: 'aboutModule-block',
        children: {
          className: 'aboutModule-block-item',
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
        className: 'aboutModule-block',
        children: {
          className: 'aboutModule-block-item',
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
        className: 'aboutModule-block',
        children: {
          className: 'aboutModule-block-item',
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
        className: 'aboutModule-block',
        children: {
          className: 'aboutModule-block-item',
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

// 公司文化
export const CultureDataSource = {
  wrapper: { className: 'home-page-wrapper aboutCultureModule-wrapper' },
  page: { className: 'home-page aboutCultureModule' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>公司文化</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'aboutCultureModule-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'aboutCultureModule-block',
        md: 8,
        xs: 24,
        children: {
          className: 'aboutCultureModule-block-item',
          children: [
            {
              name: 'image',
              className: 'aboutCultureModule-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'aboutCultureModule-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'aboutCultureModule-block',
        md: 8,
        xs: 24,
        children: {
          className: 'aboutCultureModule-block-item',
          children: [
            {
              name: 'image',
              className: 'aboutCultureModule-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'aboutCultureModule-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'aboutCultureModule-block',
        md: 8,
        xs: 24,
        children: {
          className: 'aboutCultureModule-block-item',
          children: [
            {
              name: 'image',
              className: 'aboutCultureModule-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'aboutCultureModule-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};

// 服务特点
export const ServiceFetureDataSource = {
  wrapper: { className: 'home-page-wrapper serviceFeature-wrapper' },
  page: { className: 'home-page serviceFeature' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '服务特点',
        className: 'title-h1',
      },
      // {
      //   name: 'content',
      //   className: 'title-content',
      //   children: '基于阿里云强大的基础资源',
      // },
    ],
  },
  block: {
    className: 'serviceFeature-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'serviceFeature-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceFeature-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'serviceFeature-text' },
          title: { className: 'serviceFeature-title', children: '企业资源管理' },
          content: {
            className: 'serviceFeature-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'serviceFeature-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceFeature-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'serviceFeature-text' },
          title: { className: 'serviceFeature-title', children: '云安全' },
          content: {
            className: 'serviceFeature-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'serviceFeature-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceFeature-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'serviceFeature-text' },
          title: { className: 'serviceFeature-title', children: '云监控' },
          content: {
            className: 'serviceFeature-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
    ],
  },
};

