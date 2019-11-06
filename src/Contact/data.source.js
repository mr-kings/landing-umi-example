import bg from '@/assets/img/qianhaiditu.png';

export const ContactDataSource = {
  wrapper: { className: 'home-page-wrapper contact-wrapper',bg: bg, },
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
      url: { children: 'https://gaode.com/place/B0FFG9KCSR', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '广东省深圳市南山区前海深港青年梦工场6栋B座206室',
        name: '弹框内容',
      },
    },
  },
};
