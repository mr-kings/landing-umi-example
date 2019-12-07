import chuangshiren from '@/assets/img/company/chuangshiren.jpg';
import team1 from '@/assets/img/company/team1.jpg';
import team2 from '@/assets/img/company/team2.jpg';
import Rebecca from '@/assets/img/company/Rebecca.jpg';
import Anna from '@/assets/img/company/Anna.jpg';
import Katarzyna from '@/assets/img/company/Katarzyna.jpg';

// 公司简介
export const AboutDataSource = {
  wrapper: { className: 'home-page-wrapper aboutModule-wrapper' },
  page: { className: 'home-page aboutModule' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
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

// 创始人
export const CreateManDataSource = {
  wrapper: { className: 'home-page-wrapper createMan-wrapper' },
  OverPack: { className: 'home-page createMan', playScale: 0.3 },
  imgWrapper: { className: 'createMan-img', md: 14, xs: 24 },
  img: {
    children: chuangshiren,
  },
  textWrapper: { className: 'createMan-text', md: 10, xs: 24 },
  title: { className: 'createMan-title', children: `创始人` },
  content: {
    className: 'createMan-content',
    children: `作为有着丰富经验的机器人专家， 公司的两位创始人花了多年心血 打造和完善EMYS。在2017年， 创始人之一的 JAN KĘDZIERSKI 博士被《麻省理工科技评论》选 为35岁以下的欧洲顶尖科技创新 者之一。另外，EMYS 的联合创始人 MICHAŁ DZIERGWA 也是波兰华沙的前 30名顶尖科技创新者之一。`,
  },
};

// 团队成员
export const TeamDataSource = {
  wrapper: { className: 'home-page-wrapper teams-wrapper' },
  page: { className: 'home-page teams' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '核心成员' }],
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
              className: 'teams-image',
              children: Rebecca,
            },
            { name: 'title', className: 'teams-title', children: 'Rebecca Dawes' },
            {
              name: 'content',
              className: 'teams-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content',
              className: 'teams-content',
              children: `Rebecca在英国和波兰有8年丰富的儿童教育经验。她是剑桥英语教育 CELTA和CELTYL合格证书的持有者。职业生涯中，她参与了许多儿童教学游戏和教材的内容制作`,
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
              className: 'teams-image',
              children: Anna,
            },
            { name: 'title', className: 'teams-title', children: 'Anna Caudle' },
            {
              name: 'content',
              className: 'teams-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content',
              className: 'teams-content',
              children:`Anna是富有教育经验的儿童英语课本和教材作家。她曾在美国密苏里大学任教，教授英文写作，现阶段是波兰罗兹大学的高级教授。 Anna 参与的英语内容制作包括电视节目《English and Arts》、儿童学校课本。《Surprise》、《Globetrotter》和7级英语教材《Leo English》`,
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
              className: 'teams-image',
              children: Katarzyna,
            },
            { name: 'title', className: 'teams-title', children: 'Katarzyna Rojkowska' },
            {
              name: 'content',
              className: 'teams-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content',
              className: 'teams-content',
              children: `Katarzyna 是著名的心理 学家、作者、教育专家，也是两个教育品牌— Leader School和Leonardo School 的创始人和总监。她是少儿英语教材品Leo English教科书的作者之一， 也是许多与儿童发展有关的出版物的作者`,
            },
          ],
        },
      },
    ],
  },
}

// 团队介绍
export const GroupDataSource = {
  wrapper: { className: 'home-page-wrapper group-wrapper' },
  OverPack: { className: 'home-page group', playScale: 0.3 },
  imgWrapper: { className: 'group-img', md: 12, xs: 24 },
  img: { children: team2 },
  textWrapper: { className: 'group-text', md: 12, xs: 24 },
  title: { className: 'group-title', children: '团队介绍' },
  content: {
    className: 'group-content',
    children: `EMYS的背后是一群充满创造热情，力争打造最好的教育机器人和课程的工程师、设计师及教育专家。他们在设计、构建和开发多构架机器人控制系统、机器人应用等方面有着丰富的经验。
    目前，公司雇有多过25名核心成员。他们分别为教育专家、软件研发师、机电工程师、工业设计师、平面设计师、行销营销专家、音响制作人、产品运营及顾问。
    `,
  },
};

export const Group2DataSource = {
  wrapper: { className: 'home-page-wrapper group2-wrapper' },
  OverPack: { className: 'home-page group2', playScale: 0.3 },
  imgWrapper: { className: 'group2-img', md: 12, xs: 24 },
  img: { children: team1 },
  textWrapper: { className: 'group2-text', md: 12, xs: 24 },
  title: { className: 'group2-title', children: `欧美英语教学专家团队` },
  content: {
    className: 'group2-content',
    children: `一个教育机器人的内容一定要有强大教育团队的支撑。 EMYS 的团队拥有英语教育经验丰富的教育专家， 为孩子们与EMYS的学习之旅铺路!`,
  },
};

