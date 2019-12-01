import React from 'react';

// 工程案例
export const CaseListDataSource = {
  wrapper: { className: 'home-page-wrapper caseList-wrapper' },
  page: { className: 'home-page caseList' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '产品介绍', className: 'title-h1' },
      // {
      //   name: 'content',
      //   className: 'title-content',
      //   children: '在这里用一段话介绍服务的案例情况',
      // },
    ],
  },
  block: {
    className: 'caseList-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '产品图1' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '产品图2' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '产品图3' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '产品图4' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '产品图5' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '产品图6' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '产品图7' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'caseList-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '产品图8' },
        },
      },
    ],
  },
};

export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '为什么要选择机器⼈教学？' },
  content: {
    className: 'content1-content',
    children: `任何学习过程都需要投⼊⼤量的时间，尤其是对语⾔的
    学习，开始得越早越好。“求早”非常重要，孩⼦们学
    习母语的时期就是他们开始学习第⼆语⾔的最佳时期。但问
    题在于，即使是每周两次的私⼈精品课程，也⽆法真正满⾜
    孩⼦们的语⾔学习需求，性价比不尽⼈意，并且市面上现有的
    语⾔学习游戏和应用软件没有互动性，⽆法满⾜孩⼦们的参与性。
    对幼⼉的教育⽅式必须要有极⾼的吸引⼒并让他们投⼊其中，因为
    孩⼦们学习需要用到各种感官。这也是为什么EMYS运用了⼀种能
    激发孩⼦运用全身各部位去和语⾔教学指令互动的教学⽅法，即全
    身反应法。
    `,
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: `EMYS—⾸款能胜任3⾄9岁⼩孩外语教学
  的社交型机器⼈` },
  content: {
    className: 'content2-content',
    children: `EMYS是⼀款能通过与孩⼦们有规律且有趣的互动来教授
    外语的机器⼈。EMYS能吸引孩⼦们的多种感官，并识别
    他们所熟知的和最爱的卡通⼈物、玩具以及周围环境中的
    物品。他能移动会说话，还能识别⼈脸，表达感情，逐渐
    和孩⼦们建立起亲密的关系。在学习语⾔的路上，EMYS
    能真正成为孩⼦内⼼世界的⼀部分，充满着奇妙的童趣、
    释放孩⼦们的天性和⽆边的想象⼒。
    `,
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '产品特⾊',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '语⾔教学' },
        content: {
          className: 'content6-content',
          children: 'EMYS目前具有教授英语的功能。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '教学⽅法' },
        content: {
          className: 'content6-content',
          children: `在EMYS的陪伴下，孩⼦们天天都能接触到语⾔学习。
          在我们精⼼研发的科学学习模式指引下，学习能成为孩
          ⼦们每天最期待的趣事。`,
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '奖励与进步' },
        content: {
          className: 'content6-content',
          children: `有规律的学习活动能让EMYS与孩⼦们共同成长。除了
          日常奖励，他们的进步还能解锁新的游戏和卡通片。
          `,
        },
      },
      {
        name: 'block3',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '量身定制' },
        content: {
          className: 'content6-content',
          children: `为了增添趣味性，可用超轻黏⼟打扮，能让EMYS七⼗⼆变
          （可以给他装上耳朵或尾巴）。你还可以用其他各种各样的
          装饰品，例如: 围⼱、眼镜或假胡⼦，让你的EMYS变得更加
          与众不同。`,
        },
      },
    ],
  },
};


