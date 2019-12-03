import case1 from '@/assets/img/case/1.png';
import case2 from '@/assets/img/case/2.png';
import case3 from '@/assets/img/case/3.png';
import case4 from '@/assets/img/case/4.png';
import case5 from '@/assets/img/case/5.png';
import case6 from '@/assets/img/case/6.png';
import case7 from '@/assets/img/case/7.png';
import case8 from '@/assets/img/case/8.png';
import case9 from '@/assets/img/case/9.png';
import case10 from '@/assets/img/case/10.png';

const data = [
  { name: '大型管道检测', img: case1 },
  { name: '市政管道施工', img: case2 },
  { name: '工业管道冲洗', img: case3 },
  { name: '排污箱涵清淤', img: case4 },
  { name: '污水池清理', img: case5 },
  { name: '地下管道改造', img: case6 },
  { name: '南京污水管道改造', img: case7 },
  { name: '南京窨井疏通清淤', img: case8 },
  { name: '污水池清理', img: case9 },
  { name: '小区下水管道清淤', img: case10 }
]

let dataArr = []
data.map((item,i) => {
  const itemObj = {
    name: 'block'+i,
    className: 'block',
    md: 6,
    xs: 12,
    children: {
      wrapper: { className: 'caseList-block-content' },
      img: {
        children: item.img,
      },
      content: { children: item.name },
    },
  }
  dataArr.push(itemObj)
})

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
    children: dataArr
  }
};

