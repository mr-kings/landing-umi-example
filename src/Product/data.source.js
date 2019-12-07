import product1 from '@/assets/img/product/1.jpg'
import product2 from '@/assets/img/product/2.png'
import product3 from '@/assets/img/product/3.jpg'
import product4 from '@/assets/img/product/4.jpg'
import product5 from '@/assets/img/product/5.jpg'
import product6 from '@/assets/img/product/6.jpg'
import product7 from '@/assets/img/product/7.jpg'
import product21 from '@/assets/img/product/2-1.jpg'
import product22 from '@/assets/img/product/2-2.jpg'
import product23 from '@/assets/img/product/2-3.jpg'
import product24 from '@/assets/img/product/2-4.jpg'
import product25 from '@/assets/img/product/2-5.jpg'
import product26 from '@/assets/img/product/2-6.jpg'
import product27 from '@/assets/img/product/2-7.jpg'
import product28 from '@/assets/img/product/2-8.jpg'

let dataArr = []
const data = [
  { name: '描述内容', img: product21 },
  { name: '描述内容', img: product22 },
  { name: '描述内容', img: product23 },
  { name: '描述内容', img: product24 },
  { name: '描述内容', img: product25 },
  { name: '描述内容', img: product26 },
  { name: '描述内容', img: product27 },
  { name: '描述内容', img: product28 }
]
data.map((item, i) => {
  const obj = {
    name: 'block'+i,
    className: 'block',
    md: 6,
    xs: 24,
    children: {
      wrapper: { className: 'caseList-block-content' },
      img: {
        children: item.img,
      },
      content: { children: item.name },
    },
  }
  dataArr.push(obj);
})
// 孩子的欢乐时光
export const CaseListDataSource = {
  wrapper: { className: 'home-page-wrapper caseList-wrapper' },
  page: { className: 'home-page caseList' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'EMYS与孩子们的欢乐时刻', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '相比传统课堂和私人辅导的英语学习活动，多家欧洲语言学校和众 多私人用户对EMYS的使用体验，反映出EMYS引导的英语学习方法 更能抓住孩子们的注意力和兴趣',
      },
    ],
  },
  block: {
    className: 'caseList-img-wrapper',
    gutter: 16,
    children: dataArr,
  },
};

export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 12, xs: 24 },
  img: {
    children: product1,
  },
  textWrapper: { className: 'content2-text', md: 12, xs: 24 },
  title: { className: 'content2-title', children: `EMYS—⾸款能胜任3⾄9岁⼩孩外语教学的社交型机器⼈` },
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
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 12, xs: 24 },
  img: { children: product2},
  textWrapper: { className: 'content1-text', md: 12, xs: 24 },
  title: { className: 'content1-title', children: '为什么要选择机器⼈教学？' },
  content: {
    className: 'content',
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
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper feature3-wrapper' },
  OverPack: { className: 'home-page feature3', playScale: 0.3 },
  imgWrapper: { className: 'feature3-img', md: 12, xs: 24 },
  img: { children: product3 },
  textWrapper: { className: 'feature3-text', md: 12, xs: 24 },
  title: { className: 'feature3-title', children: `EMYS的趣味教材` },
  content: {
    className: 'feature3-content',
    children: `教材涵盖了与儿童世界紧密连接的10套英语内容。
    这套教材是由欧美教育专家研发，让孩子们学习的过程充满乐趣。 引导孩子们在最自然的状态中，通过全部的感官、实物交互、积极 参与和玩乐中学习英语。EMYS也会向孩子们提出关于周围事物的各 种问题，让他们从小就有一个帮助他们接触实用英语的好伙伴。教材包括以下：
    `,
  },
  list: {
    className: 'feature3-list',
    children: [
      '160 个单词和超过300句实用表达句',
      '50 个教育式游戏',
      '40 个娱乐式游',
      '30 个复习游戏',
      '60 部动画故事和影片',
      '10 首儿歌',
      '20 个美术活动 -- 通过手工制作方式学英'],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 12 },
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
        children: 'EMYS是针对低龄孩子而开发的内容，把游戏与现实中的活动合二为一，让小朋友轻松习得英语。为了满足孩子的求知欲，课程内容会不断地更新',
      },
    ],
  },
  img: {
    children: product4,
    className: 'content6-img',
    xs: 24,
    md: 12,
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
            'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
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

export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper feature5-wrapper' },
  page: { className: 'home-page feature5' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品展示' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'feature5-image',
              children: product5,
            },
            { name: 'title', className: 'feature5-title', children: '标题' },
            {
              name: 'content',
              className: 'feature5-job',
              children: '描述',
            },
            {
              name: 'content',
              className: 'feature5-content',
              children: ``,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'feature5-image',
              children: product6,
            },
            { name: 'title', className: 'feature5-title', children: '标题' },
            {
              name: 'content',
              className: 'feature5-job',
              children: '描述',
            },
            {
              name: 'content',
              className: 'feature5-content',
              children:``,
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'feature5-image',
              children: product7,
            },
            { name: 'title', className: 'feature5-title', children: '标题' },
            {
              name: 'content',
              className: 'feature5-job',
              children: '描述',
            },
            {
              name: 'content',
              className: 'feature5-content',
              children: ``,
            },
          ],
        },
      },
    ],
  },
}


