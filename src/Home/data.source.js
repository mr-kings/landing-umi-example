import React from 'react';
import culture1 from '@/assets/img/culture/1.png';
import culture2 from '@/assets/img/culture/2.png';
import culture3 from '@/assets/img/culture/3.png';
import erweima from '@/assets/img/erweima.png';
import contact from '@/assets/img/icon/1.png';
import xuqiu from '@/assets/img/icon/2.png';
import hetong from '@/assets/img/icon/3.png';
import yanshou from '@/assets/img/icon/4.png';
import case1 from '@/assets/img/case/1.png';
import case2 from '@/assets/img/case/2.png';
import case3 from '@/assets/img/case/3.png';
import case4 from '@/assets/img/case/4.png';
import case5 from '@/assets/img/case/5.png';
import feature1 from '@/assets/img/feature/1.png';
import feature2 from '@/assets/img/feature/2.png';
import feature3 from '@/assets/img/feature/3.png';
import service1 from '@/assets/img/service/1/1-1.png';
import service2 from '@/assets/img/service/2/2-1.png';
import service3 from '@/assets/img/service/3/3-1.png';
import service4 from '@/assets/img/service/4/4-1.png';
import service5 from '@/assets/img/service/5/5-1.png';
import service6 from '@/assets/img/service/6/6-1.png';

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
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
      },
    ],
  },
};

// 关于我们
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper about-wrapper' },
  page: { className: 'home-page about' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
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
      <p className="about-content-text">
        江苏趣通市政工程有限公司是一家专业从事市政疏通行业的公司，本着客户为先、诚信至上、专业高效的服务理念，为广大客户提供管道疏通、管网CCTV检测、工业管道清洗、管道非开挖修复、下水道疏通、排水管道修复、涵洞清淤、排污箱涵清淤、化粪池清理、污水池清理、河道整治清淤、工厂废水清运、水库清淤等综合性服务。公司拥有一流的施工团队、专业的机械设备、正规的合作流程和非常严格的操作管理，快捷服务，高效施工，保证工程质量，让客户省心满意！我们承诺免费定期检查，客户无后顾之忧！公司常年承包各事业单位、企业、工厂、小区物业、酒店、饭店的疏通、排污项目，欢迎来电垂询！免费咨询热线：13913370505/025-52209660，联系人：徐经理
      </p>
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
              children: culture1,
            },
            {
              name: 'title',
              className: 'about-block-title',
              children: '企业价值观',
            },
            { name: 'content', children: '以诚行道，以信载物' },
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
              children: culture2,
            },
            {
              name: 'title',
              className: 'about-block-title',
              children: '企业服务宗旨',
            },
            {
              name: 'content',
              children: '专业高效，客户满意至上',
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
              children: culture3,
            },
            {
              name: 'title',
              className: 'about-block-title',
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

// 服务项目
export const ServiceDataSource = {
  wrapper: { className: 'home-page-wrapper service-wrapper' },
  page: { className: 'home-page service' },
  OverPack: { playScale: 0.3, className: 'overpack' },
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
    autoPlay: false,
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service1 },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">南京管道疏通</p>
                <ul>
                  <li>南京市政管道疏通</li>
                  <li>南京生活管道疏通</li>
                  <li>南京下水道疏通</li>
                  <li>南京工业管道疏通</li>
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
                href: '/service.html',
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service2 },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">南京管道清洗</p>
                <ul>
                  <li>南京市政管道清洗</li>
                  <li>南京生活管道清洗</li>
                  <li>南京大型管道清洗</li>
                  <li>南京工业管道清洗</li>
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
                href: '/service.html',
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service3 },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">管道检测修复</p>
                <ul>
                  <li>南京管道CCTV检测</li>
                  <li>南京大型管道维修</li>
                  <li>南京管道疏通封堵</li>
                  <li>南京管道非开挖修复</li>
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
                href: '/service.html',
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service4},
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">排污系统清理</p>
                <ul>
                  <li>南京污水池清理</li>
                  <li>南京化粪池清理</li>
                  <li>南京隔油池清理</li>
                  <li>开发区管道系统清理</li>
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
                href: '/service.html',
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service5 },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">南京河道清淤</p>
                <ul>
                  <li>南京河道清淤</li>
                  <li>南京水库清淤</li>
                  <li>南京池塘清淤</li>
                  <li>南京船舶管道清理</li>
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
                href: '/service.html',
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
        sm: 12,
        children: {
          wrapper: { className: 'service-block-box ' },
          topWrapper: { className: 'service-top-wrapper' },
          image: { className: 'service-img', children: service6 },
          content: {
            className: 'service-content',
            children: (
              <>
                <p className="service-content-title">更多相关服务</p>
                <ul>
                  <li>南京工厂废水清运</li>
                  <li>厨房油烟囱清洗</li>
                  <li>屋面防水堵漏</li>
                  <li>南京窨井清理</li>
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
                href: '/service.html',
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
          image: case1,
          title: '大型管道CCTV检测',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block1',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: case2,
          title: '市政管道疏通维护',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block2',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: case3,
          title: '工业管道高压冲洗',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block3',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: case4,
          title: '南京污水池清理',
          titleClassName: 'case-block-item-title',
        }
      },
      {
        name: 'block4',
        className: 'case-block',
        children: {
          className: 'case-block-item',
          image: case5,
          title: '大型管网改造维护',
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
          gutter: 60,
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
                    children: contact,
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '1',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children: '拨打热线13913370505或在下方留言区留言，免费咨询项目',
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
                    children: xuqiu,
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '2',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children: '客服联系您初步了解您的需求后，安排项目经理同您对接',
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
                    children: hetong,
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '3',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children: '确定合作后，签订合作协议，制定项目解决方案，进行施工',
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
                    children: yanshou,
                  },
                  {
                    name: 'title',
                    className: 'process-block-title',
                    children: '4',
                  },
                  {
                    name: 'content',
                    className: 'process-block-content',
                    children: '工程竣工验收，后期专员回访，我们承诺提供年度维护服务',
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
    gutter: 100,
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
              children: feature1,
            },
            {
              name: 'title',
              className: 'feature-block-title',
              children: '服务',
            },
            {
              name: 'title',
              className: 'feature-block-title2',
              children: '热情+真诚',
            },
            {
              name: 'content',
              className: 'feature-block-tip',
              children: '用情待客，用智做事，用心服务，诚信立足，以客户满意为第一服务要义',
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
              children: feature2,
            },
            {
              name: 'title',
              className: 'feature-block-title',
              children: '技术',
            },
            {
              name: 'title',
              className: 'feature-block-title2',
              children: '团队+设备',
            },
            {
              name: 'content',
              className: 'feature-block-tip',
              children: '团队有专业的技术，多年的从业经验，以及专业的施工设备（高压清洗车、吸污车等）支持',
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
              children: feature3,
            },
            {
              name: 'title',
              className: 'feature-block-title',
              children: '收费',
            },
            {
              name: 'title',
              className: 'feature-block-title2',
              children: '合同制',
            },
            {
              name: 'content',
              className: 'feature-block-tip',
              children: '签订项目合同，评估项目，制定合理的施工方案，收费有据可循，我们不是做一锤子买卖',
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
        className: 'contact-block',
        md: 10,
        xs: 24,
        children: {
          className: 'contact-block-item',
          children: [
            {
              name: 'content',
              className: 'contact-block-label company',
              children: '江苏趣通市政工程有限公司',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系人：徐经理',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '联系电话：13913370505',
            },
            {
              name: 'content',
              className: 'contact-block-label',
              children: '电子邮箱：qutong13913370505@163.com',
            },
            {
              name: 'image',
              className: 'contact-block-img',
              children: '微信扫码 快速咨询：',
              src: erweima,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'contact-block contact-block-two',
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

