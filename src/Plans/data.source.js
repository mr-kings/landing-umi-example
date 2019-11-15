import React from 'react';

export const PartnersCategoryDataSource = {
  wrapper: { className: 'home-page-wrapper category-wrapper' },
  page: { className: 'home-page category' },
  OverPack: { playScale: 0.3, className: 'category-content-wrapper' },
  titleWrapper: {
    className: 'category-title-wrapper',
    children: [
      { name: 'title', children: '合作伙伴', className: 'category-title-h1' },
    ],
  },
  block: {
    className: 'category-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'category-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'category-block-box ' },
          topWrapper: { className: 'category-top-wrapper' },
          name: { className: 'category-name', children: 'NEW' },
          money: {
            className: 'category-money',
            children: (
              <>
                <p>最新合作企业</p>
              </>
            ),
          },
          content: {
            className: 'category-content',
            children: (
              <>
                <div>
                  <p><a>企业1</a></p>
                  <p><a>企业2</a></p>
                  <p><a>企业3</a></p>
                  <p><a>企业4</a></p>
                  <p><a>企业5</a></p>
                  <p><a>企业6</a></p>
                </div>
              </>
            ),
          },
          line: { className: 'category-line' },
          buttonWrapper: {
            className: 'category-button-wrapper',
            children: {
              a: {
                className: 'category-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'category-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'category-block-box active' },
          topWrapper: { className: 'category-top-wrapper' },
          name: { className: 'category-name', children: 'VIP' },
          money: { className: 'category-money', children: '金牌合作企业' },
          content: {
            className: 'category-content',
            children: (
              <>
                <div>
                  <p><a>企业1</a></p>
                  <p><a>企业2</a></p>
                  <p><a>企业3</a></p>
                  <p><a>企业4</a></p>
                  <p><a>企业5</a></p>
                  <p><a>企业6</a></p>
                </div>
              </>
            ),
          },
          line: { className: 'category-line' },
          buttonWrapper: {
            className: 'category-button-wrapper',
            children: {
              a: {
                className: 'category-button',
                href: '#',
                children: '查看更多',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'category-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'category-block-box ' },
          topWrapper: { className: 'category-top-wrapper' },
          name: { className: 'category-name', children: 'LONG' },
          money: { className: 'category-money', children: '长期合作企业' },
          content: {
            className: 'category-content',
            children: (
              <>
                <div>
                  <p><a>企业1</a></p>
                  <p><a>企业2</a></p>
                  <p><a>企业3</a></p>
                  <p><a>企业4</a></p>
                  <p><a>企业5</a></p>
                  <p><a>企业6</a></p>
                </div>
              </>
            ),
          },
          line: { className: 'category-line' },
          buttonWrapper: {
            className: 'category-button-wrapper',
            children: {
              a: {
                className: 'category-button',
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

export const NewsListDataSource = {
  wrapper: { className: 'home-page-wrapper partnersList-wrapper' },
  page: { className: 'home-page partnersList' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '新闻动态', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};


export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper partnerProduct-wrapper' },
  page: { className: 'home-page partnerProduct' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'partnerProduct-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css partnerProduct-block',
        md: 6,
        xs: 24,
        children: {
          className: 'partnerProduct-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name: 'image',
              className: 'partnerProduct-block-icon jzjgrlz134-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'partnerProduct-block-title jzj8xt5kgv7-editor_css',
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
        className: 'partnerProduct-block',
        md: 6,
        xs: 24,
        children: {
          className: 'partnerProduct-block-item',
          children: [
            {
              name: 'image',
              className: 'partnerProduct-block-icon jzjncn210ql-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'partnerProduct-block-title jzjne54fwqm-editor_css',
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
        className: 'partnerProduct-block',
        md: 6,
        xs: 24,
        children: {
          className: 'partnerProduct-block-item',
          children: [
            {
              name: 'image',
              className: 'partnerProduct-block-icon jzjndq0dueg-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'partnerProduct-block-title jzjne24af8c-editor_css',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
      {
        name: 'block~jzjn87bmyc7',
        className: 'partnerProduct-block',
        md: 6,
        xs: 24,
        children: {
          className: 'partnerProduct-block-item',
          children: [
            {
              name: 'image',
              className: 'partnerProduct-block-icon jzjndsyw8sf-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'partnerProduct-block-title jzjndw5oerk-editor_css',
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

export const VideoDataSource = {
  wrapper: { className: 'home-page-wrapper Video-wrapper' },
  page: { className: 'home-page Video' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '云凤蝶提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content Video-title-content',
        children: '科技想象力，金融创造力',
      },
    ],
  },
  video: {
    className: 'Video-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};


export const FeatureDataSource = {
  wrapper: { className: 'home-page-wrapper partnerFeature-wrapper' },
  page: { className: 'home-page partnerFeature' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      { name: 'content', children: '基于阿里云计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'partnerFeature-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'partnerFeature-tag',
          text: { children: 'PHONE', className: 'partnerFeature-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'partnerFeature-content',
          text: {
            className: 'partnerFeature-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'partnerFeature-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'partnerFeature-tag',
          icon: { children: 'tablet' },
          text: { className: 'partnerFeature-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'partnerFeature-content',
          text: {
            className: 'partnerFeature-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'partnerFeature-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'partnerFeature-tag',
          text: { children: 'DESKTOP', className: 'partnerFeature-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'partnerFeature-content',
          text: {
            className: 'partnerFeature-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'partnerFeature-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};

