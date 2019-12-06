import process1 from '@/assets/img/process/1.png';
import process2 from '@/assets/img/process/2.png';
import process3 from '@/assets/img/process/3.png';
import process4 from '@/assets/img/process/4.png';
import process5 from '@/assets/img/process/5.png';
import process6 from '@/assets/img/process/6.png';
import call from '@/assets/img/process/call.png';
import message from '@/assets/img/process/message.png';

// 服务流程简介
export const ProcessDescDataSource = {
  wrapper: { className: 'home-page-wrapper processDesc-wrapper' },
  page: { className: 'processDesc' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
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
            { name: 'content', children: `我公司服务范畴包含了市政管道疏通清洗、市政管道检测维护、雨水管道疏通清理、明暗渠道疏通、下水道疏通、工业管道疏通维护、排水管道修复、涵洞清淤、排污箱涵清淤、化粪池清掏、污水池清理、隔油池清理、河道整治清淤、工厂废水清运、水库清淤、大型管道检测评估、管道非开挖修复、管网改造、窨井清理等。服务对象小至个人、家庭，大至公司、写字楼、小区物业、学校、饭店、酒店、工厂等。公司拥有优秀的人才队伍，先进的施工设备，正规化的操作流程，您有需求，可以拨打我们的服务热线13913370505/025-52209660或者留言进行免费的项目咨询，我们会在24小时内给予回复，进行初步的需求了解后，我们可以提供免费的施工现场勘察，合理评估项目周期和造价，确定合作关系后，制定可行的施工方案，并且我们提供年度维护服务，让客户少了后顾之忧。有需求，找趣通，就是省心。`},
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
    dots: true,
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process1,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '项目咨询',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '拨打热线或在线留言免费咨询',
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process2,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '了解需求',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '24小时内回电，了解客户需求',
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process3,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '项目评估',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '免费勘察，评估项目周期及造价',
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process4,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '合作双赢',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '签订合作协议，制定项目方案',
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process5,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '施工验收',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '如期施工，工程质量验收',
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
                children: 'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'processStep-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'processStep-block-image',
                    children: process6,
                  },
                  {
                    name: 'title',
                    className: 'processStep-block-title',
                    children: '年度维护',
                  },
                  {
                    name: 'content',
                    className: 'processStep-block-content',
                    children: '项目竣工，提供年度维护服务',
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
            name: 'image',
            className: 'processContact-icon',
            children: call,
          },
          textWrapper: { className: 'processContact-text' },
          title: { className: 'processContact-title', children: '拨打热线' },
          content: {
            className: 'processContact-content',
            children: '13913370505',
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
            name: 'image',
            className: 'processContact-icon',
            children: message,
          },
          textWrapper: { className: 'processContact-text' },
          title: { className: 'processContact-title', children: '我要留言' },
          content: {
            name: 'button',
            className: 'processContact-button',
            children: { href: '/contact.html', target: '#contact', children: '立即留言' },
          },
        },
      },
    ],
  },
}
