import React from 'react';
import culture1 from '@/assets/img/culture/1.png';
import culture2 from '@/assets/img/culture/2.png';
import culture3 from '@/assets/img/culture/3.png';
import icon1 from '@/assets/img/icon/2-1.png';
import icon2 from '@/assets/img/icon/2-2.png';
import icon3 from '@/assets/img/icon/2-3.png';

// 公司简介
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper aboutModule-wrapper' },
  page: { className: 'home-page aboutModule' },
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
            { name: 'content', children: `江苏趣通市政工程有限公司是一家专业从事市政疏通行业的公司，本着客户为先、诚信至上、专业高效的服务理念，为广大客户提供管道疏通、管网CCTV检测、工业管道清洗、管道非开挖修复、下水道疏通、排水管道修复、涵洞清淤、排污箱涵清淤、化粪池清理、污水池清理、河道整治清淤、工厂废水清运、水库清淤等综合性服务`},
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
            {
              name: 'content',
              children: `公司现今有优秀的施工团队、严格的施工流程、先进的机械设备以及标准化的服务系统，合同制合作形式，我们提供首年内1次项目检查服务，针对大需求客户，我公司特别定制了套餐服务，优惠多多，加速响应，快速解决客户的问题。公司常年承包各企业、工厂、小区物业、酒店、饭店、学校等的工程项目，欢迎广大尊敬的客户来电咨询，服务热线13913370505/025-52209660，联系人徐经理
            `},
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
              children: culture1,
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
              children: culture2,
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
              children: culture3,
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
    data: [
      { name: '趣通', value: 200, size: 120 },
      { name: '市政', value: 20, size: 90 },
      { name: '公司', value: 20, size: 90 },
      { name: '物业', value: 20, size: 90 },
      { name: '家庭', value: 20, size: 90 },
      { name: '酒店', value: 20, size: 90 },
      { name: '饭店', value: 20, size: 90 },
      { name: '工厂', value: 20, size: 90 },
      { name: '学校', value: 20, size: 90 }
    ],
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
            children: icon1,
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
            children: icon2,
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
            children: icon3,
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

