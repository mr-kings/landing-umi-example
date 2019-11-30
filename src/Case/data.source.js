import case1 from '@/assets/img/case/1.png';
import case2 from '@/assets/img/case/2.png';
import case3 from '@/assets/img/case/3.png';
import case4 from '@/assets/img/case/4.png';
import case5 from '@/assets/img/case/5.png';

// 工程案例
export const CaseListDataSource = {
  wrapper: { className: 'home-page-wrapper caseList-wrapper' },
  page: { className: 'home-page caseList' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '工程案例', className: 'title-h1' },
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
            children: case1,
          },
          content: { children: '大型管道检测' },
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
            children: case2,
          },
          content: { children: '市政管道施工' },
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
            children: case3,
          },
          content: { children: '工业管道冲洗' },
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
            children: case4,
          },
          content: { children: '排污箱涵清淤' },
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
            children: case5,
          },
          content: { children: '污水池清理' },
        },
      },
    ],
  },
};

