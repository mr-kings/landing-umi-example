import React from 'react';
import blackCube from '@/assets/img/blackCube.jpeg';
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
  contentWrap: {
    content: (
      <>
        <p>AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
        方便、专业可靠、无限可能的数据可视化最佳实践。</p>
        <p>AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
        方便、专业可靠、无限可能的数据可视化最佳实践。</p>
        <p>AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
        方便、专业可靠、无限可能的数据可视化最佳实践。</p>
      </>
    )
  },
  childWrapper: {
    className: 'about-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'about-block',
        md: 8,
        xs: 24,
        children: {
          className: 'about-block-item',
          children: [
            {
              name: 'image',
              className: 'about-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'about-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'about-block',
        md: 8,
        xs: 24,
        children: {
          className: 'about-block-item',
          children: [
            {
              name: 'image',
              className: 'about-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'about-block-title',
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
        className: 'about-block',
        md: 8,
        xs: 24,
        children: {
          className: 'about-block-item',
          children: [
            {
              name: 'image',
              className: 'about-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'about-block-title',
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

// 服务项目
export const ServiceDataSource = {
  wrapper: { className: 'home-page-wrapper service-wrapper' },
  page: { className: 'home-page service' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>服务项目</p>
          </>
        ),
      },
    ],
  },
  BannerAnim: {
    autoPlay: true,
    arrow: false,
    type: "across"
  },
  block: {
    className: 'service-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">管网服务工程</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">河道清淤工程</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">排污系统清理</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block3',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">管网服务工程</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block4',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">管网服务工程</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block5',
        className: 'service-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ' },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">管网服务工程</p>
                <ul>
                  <li>市政管道工程</li>
                  <li>管道CCTV检测</li>
                  <li>管道疏通精细</li>
                  <li>管道维修改造</li>
                  <li>管道封堵</li>
                </ul>
              </>
            ),
          },
          line: { className: 'service-line' },
          buttonWrapper: {
            className: 'service-button-wrapper',
            children: {
              a: {
                className: 'service-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
    ],
  },
};

// 工程案例
export const CaseDataSource = {
  wrapper: { className: 'home-page-wrapper case-wrapper' },
  page: { className: 'home-page case' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>工程案例</p>
          </>
        ),
      },
    ],
  },
  carousel: {
    className: 'case-block-wrapper',
    interval: '4000',
    type: 'card',
    height: '400px',
    autoplay: false,
    indicatorPosition: 'outside',
    trigger: 'click',
  },
  childWrapper: {
    className: 'case-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
          title: '文字描述',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block1',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
          title: '文字描述',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block2',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
          title: '文字描述',
          titleClassName: 'case-block-item-title',
        }
      },
    ],
  },
};

// 服务流程
export const ProcessDataSource = {
  wrapper: { className: 'home-page-wrapper process-wrapper' },
  page: { className: 'home-page process' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'process-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>服务流程</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'process-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'process-button',
        children: { href: '#Contact', children: '立即体验' },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'process-carousel',
    wrapper: { className: 'process-block-wrapper' },
    children: {
      className: 'process-block',
      titleWrapper: {
        className: 'process-carousel-title-wrapper',
        title: { className: 'process-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'process-block-row',
          gutter: 120,
          title: {
            className: 'process-carousel-title-block',
            children: '',
          },
          children: [
            {
              className: 'process-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'process-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'process-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'process-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '需求沟通',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children: '沟通业务需求，对接人：诚凡、芸彩',
                  },
                ],
              },
            },
            {
              className: 'process-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'process-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'process-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'process-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '需求沟通',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children:
                      '沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩',
                  },
                ],
              },
            },
            {
              className: 'process-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'process-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'process-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'process-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '需求沟通',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children:
                      '沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩',
                  },
                ],
              },
            },
            {
              className: 'process-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'process-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'process-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'process-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '需求沟通',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children:
                      '沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩',
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

// 找聚通就是省心
export const FeatureDataSource = {
  wrapper: { className: 'home-page-wrapper feature-wrapper' },
  page: { className: 'home-page feature' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '找聚通,就是省心' }],
  },
  childWrapper: {
    className: 'feature-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'feature-block',
        md: 8,
        xs: 24,
        children: {
          className: 'feature-block-item',
          children: [
            {
              name: 'image',
              className: 'feature-block-icon',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'feature-block-title',
              children: '一站式业务接入',
            },
            {
              name: 'content',
              children: '支付、结算、核算接入产品效率翻四倍',
              className: 'jzj8z9sya9-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'feature-block',
        md: 8,
        xs: 24,
        children: {
          className: 'feature-block-item',
          children: [
            {
              name: 'image',
              className: 'feature-block-icon',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'feature-block-title',
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
        className: 'feature-block',
        md: 8,
        xs: 24,
        children: {
          className: 'feature-block-item',
          children: [
            {
              name: 'image',
              className: 'feature-block-icon',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'feature-block-title',
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

// 联系我们
export const ContactDataSource = {
  wrapper: { className: 'home-page-wrapper contact-wrapper' },
  page: { className: 'home-page contact' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>联系我们</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'contact-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'contact-block contact-block-first',
        md: 10,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [
            {
              name: 'content',
              className: 'contact-block-label',
              children: '公司名称：金服科技有限公司',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系人：罗**',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系电话：0778 - 8434221',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '电子邮箱：kimshareclub@gmail.com',
            },
            {
              name: 'image',
              className: 'contact-block-img',
              src: blackCube,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'contact-block',
        md: 14,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [ ],
        },
      },
    ],
  },
};

