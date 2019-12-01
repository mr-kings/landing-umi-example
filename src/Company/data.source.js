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
            { name: 'content', children: `EMYS背后是⼀群充满创造热情，⼒争打造最⼈性化的社交型机器
            ⼈的⼯程师、设计师以及教育⼯作者们。他们在设计、构建和开发
            多构架机器⼈控制系统、机器⼈应用等⽅面有着丰厚的经验。他们
            还与语⾔学校接轨，将语⾔习得核⼼教育⽅法运用于技术开发。更
            有⼤量教育专家协助他们进⾏产品优化测试。`},
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
            { name: 'content', children: `公司获得HAX (www.hax.co)—全球第⼀的硬件初创企业加速器的支
            持。此项目已在中国深圳孵化，⼤⼤加快了产品的研发进程和精确
            的⽣产成本预估。目前，公司雇有17名核⼼成员，他们分别是软件
            研发师、机电⼯程师、平面设计师、技术理论专家、语⾔专家以及
            在职教师。`},
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
            { name: 'content', children: `作为⼀批有着多年经验的机器⼈技术研发者和⼯程师，公司创始⼈
            花了多年⼼⾎打造和完善他们的社交型机器⼈。在2017年，创始⼈
            之⼀的Jan Kedzierski博⼠被《麻省理⼯科技评论》选为35岁以下的
            欧洲顶尖科技创新者之⼀。另外，
            EMYS的联合创始⼈，Michal
            Dziergwa也是波兰华沙的前
            30名顶尖科技创新者之⼀。
            他们始终相信他们的产品
            能完美迎合全球化的社会
            需求。在欧亚多样化的
            市场中，相比起传统语
            ⾔教育的花费，EMYS
            对于⼤多数普通收⼊
            的家庭更经济实惠。`},
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

