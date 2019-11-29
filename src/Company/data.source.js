import React from 'react';


// 公司简介
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper aboutModule-wrapper' },
  page: { className: 'aboutModule' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '企业简介', className: 'title-h1' },
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
            { name: 'content', children: `众所皆智（深圳）科技有限公司成立于2019年6月，旗下拥有科技品牌太空种子，英文名 Spaceed。“太空”即空间 Space，我们办公空间坐落于深圳中国科技创新创业的发展中心——深圳；此空间也是一个概念上的市场空间，在科技行业打造专属自己的科技品牌。此外，“太空”还有高科技和超前技术的未来展望，对“太空”的探索，也是科技初创企业和项目，以及科技人才对科技的展望和追求。“种子”即seed, 是从一个新的创意和想法诞生之初，拥有萌发新芽和蓬勃向上动力的种子。我们的科技就是一颗颗“种子”，在未来世界将迸发无穷的潜力。`},
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
            { name: 'content', children: `我们打造一个科技品牌和市场生态，在追求创新和展望未来的同时，打造科技文化和智能生活概念。在科技研发的同时，建设专为科技市场研究和品牌打造的生态系统，并围绕提升国际品牌和科研产品的知名度。`},
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
            <p>企业文化</p>
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
              children: '企业价值观',
            },
            { name: 'content', children: '以诚行道，以信载物' },
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
              children: '企业服务宗旨',
            },
            {
              name: 'content',
              children: '专业高效，保证服务质量',
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
              children: '企业使命',
            },
            {
              name: 'content',
              children: '解决城市刚需，美化环境',
            },
          ],
        },
      },
    ],
  },
};

// 服务群体
export const ServiceGroupDataSource = {
  wrapper: { className: 'home-page-wrapper serviceGroup-wrapper' },
  page: { className: 'home-page serviceGroup' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '我们的客户群体',
        className: 'title-h1',
      },
    ],
  },
  block: {
    wrapper: { className: 'serviceGroup-box' },
    blockWrapper: { className: 'serviceGroup-block' },
    height: 300,
    backgroundColor: `#1890ff`,
    text: ['市政','公司','物业','家庭','酒店','饭店','工厂','学校'],
  }
}

// 服务区域
export const ServiceAreaDataSource = {
  wrapper: { className: 'home-page-wrapper serviceArea-wrapper' },
  page: { className: 'home-page serviceArea' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '服务区域',
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'serviceArea-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'serviceArea-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceArea-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'serviceArea-text' },
          title: { className: 'serviceArea-title', children: '' },
          content: {
            className: 'serviceArea-content',
            children: '客服急速应答，团队高效施工',
          },
        },
      },
      {
        name: 'block1',
        className: 'serviceArea-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceArea-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'serviceArea-text' },
          title: { className: 'serviceArea-title', children: '' },
          content: {
            className: 'serviceArea-content',
            children: '评估项目难度，收费有凭有据',
          },
        },
      },
      {
        name: 'block2',
        className: 'serviceArea-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'serviceArea-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'serviceArea-text' },
          title: { className: 'serviceArea-title', children: '' },
          content: {
            className: 'serviceArea-content',
            children: '合同制合作形式，并提供维护服务',
          },
        },
      },
    ],
  },
}


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
          title: { className: 'serviceFeature-title', children: '快' },
          content: {
            className: 'serviceFeature-content',
            children: '客服急速应答，团队高效施工',
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
          title: { className: 'serviceFeature-title', children: '准' },
          content: {
            className: 'serviceFeature-content',
            children: '评估项目难度，收费有凭有据',
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
          title: { className: 'serviceFeature-title', children: '稳' },
          content: {
            className: 'serviceFeature-content',
            children: '合同制合作形式，并提供维护服务',
          },
        },
      },
    ],
  },
};

