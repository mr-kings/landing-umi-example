import address from '@/assets/img/address.png';
import phone from '@/assets/img/phone.png';
import email from '@/assets/img/email.png';
import bg from '@/assets/img/qianhaiditu.png';

// 公司地址
export const PositionDataSource = {
  wrapper: { className: 'home-page-wrapper position-wrapper' },
  page: { className: 'home-page position' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '公司地址',
        className: 'title-h1',
      },
    ],
  },
  wrapper2: { className: 'home-page-wrapper position-wrapper2',bg: bg, },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://ditu.amap.com/place/B0FFH6CAOB', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '中国广东省深圳市福田区市花路南侧长富金茂大厦1号楼303',
        name: '弹框内容',
      },
    },
  },
};

// 联系我们
export const ContactDataSource = {
    wrapper: { className: 'home-page-wrapper feature-wrapper' },
    page: { className: 'home-page feature' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
      className: 'title-wrapper',
      children: [{ name: 'title', children: '联系我们' }],
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
                children: address,
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: `US: 1000 N. West St. Ste. 1501,
                Wilmington, Delaware 19801,`,
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: `PL:
                ul. Podwale 62A, pok. 015,
                50-010 Wrocław, POLAND`,
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: `CN:
                广东省深圳市福田区福保街道福保社
                区市花路南侧长富金茂大厦1号楼303`,
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
                children: phone,
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: 'US: (+1) 302 294 0790',
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: 'PL: (+48) 71 750 1526',
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: 'CN: (+86) 134 8074 4769',
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
                children: email,
              },
              {
                name: 'content',
                className: 'feature-block-tip',
                children: 'contact@emys.co',
              },
            ],
          },
        },
      ],
    },
  };
