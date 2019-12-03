import service11 from '@/assets/img/service/1/1-1.png';
import service12 from '@/assets/img/service/1/1-2.png';
import service13 from '@/assets/img/service/1/1-3.png';
import service14 from '@/assets/img/service/1/1-4.png';
import service15 from '@/assets/img/service/1/1-5.png';
import service16 from '@/assets/img/service/1/1-6.png';
import service17 from '@/assets/img/service/1/1-7.png';
import service18 from '@/assets/img/service/1/1-8.png';
import service21 from '@/assets/img/service/2/2-1.png';
import service22 from '@/assets/img/service/2/2-2.png';
import service23 from '@/assets/img/service/2/2-3.png';
import service24 from '@/assets/img/service/2/2-4.png';
import service25 from '@/assets/img/service/2/2-5.png';
import service31 from '@/assets/img/service/3/3-1.png';
import service32 from '@/assets/img/service/3/3-2.png';
import service33 from '@/assets/img/service/3/3-3.png';
import service34 from '@/assets/img/service/3/3-4.png';
import service35 from '@/assets/img/service/3/3-5.png';
import service36 from '@/assets/img/service/3/3-6.png';
import service41 from '@/assets/img/service/4/4-1.png';
import service42 from '@/assets/img/service/4/4-2.png';
import service43 from '@/assets/img/service/4/4-3.png';
import service44 from '@/assets/img/service/4/4-4.png';
import service45 from '@/assets/img/service/4/4-5.png';
import service51 from '@/assets/img/service/5/5-1.png';
import service52 from '@/assets/img/service/5/5-2.png';
import service53 from '@/assets/img/service/5/5-3.png';
import service54 from '@/assets/img/service/5/5-4.jpg';
import service55 from '@/assets/img/service/5/5-5.png';
import service56 from '@/assets/img/service/5/5-6.png';
import service57 from '@/assets/img/service/5/5-7.png';
import service58 from '@/assets/img/service/5/5-8.png';
import service61 from '@/assets/img/service/6/6-1.png';
import service62 from '@/assets/img/service/6/6-2.png';
import service63 from '@/assets/img/service/6/6-3.png';
import service64 from '@/assets/img/service/6/6-4.png';
import service65 from '@/assets/img/service/6/6-5.png';
import service66 from '@/assets/img/service/6/6-6.png';

const data = [
  {
    name: '南京管道疏通', id: 1, data: [{
    name: '南京市政管道疏通', img: service11
  },{
    name: '南京生活管道疏通', img: service12
  },{
    name: '南京下水道疏通', img: service13
  },{
    name: '南京工业管道疏通', img: service14
  },{
    name: '南京大型管道疏通清淤', img: service15
  },{
    name: '南京居民生活管道疏通', img: service16
  },{
    name: '南京市政管道检测疏通', img: service17
  },{
    name: '南京污水井疏通', img: service18
      }]
  },
  {
    name: '南京管道清洗', id: 2, data: [{
      name: '南京市政管道清洗', img: service21
    },{
      name: '南京生活管道清洗', img: service22
    },{
      name: '南京大型管道清洗', img: service23
    },{
      name: '南京工业管道清洗', img: service24
    },{
      name: '南京管道清洗', img: service25
    }]
  },
  {
    name: '管道检测修复', id: 3, data: [{
      name: '南京管道CCTV检测', img: service31
    },{
      name: '南京大型管道维修', img: service32
    },{
      name: '南京管道疏通封堵', img: service33
    },{
      name: '南京管道非开挖修复', img: service34
    },{
      name: '南京管道CCTV检测', img: service35
    },{
      name: '南京市政设备维护', img: service36
    }]
  },
  {
    name: '排污系统清理', id: 4, data: [{
      name: '南京污水池清理', img: service41
    },{
      name: '南京化粪池清理', img: service42
    },{
      name: '南京隔油池清理', img: service43
    },{
      name: '开发区管道系统清理', img: service44
    },{
      name: '南京窨井清理', img: service45
    }]
  },
  {
    name: '南京河道清淤', id: 5, data: [{
      name: '南京河道整治清淤', img: service51
    },{
      name: '南京水库清淤', img: service52
    },{
      name: '南京池塘清淤', img: service53
    },{
      name: '南京船舶管道清理', img: service54
    },{
      name: '南京池塘清淤', img: service55
    },{
      name: '南京大型管道疏通清淤', img: service56
    },{
      name: '南京大型管网清淤', img: service57
    },{
      name: '南京河道清淤', img: service58
    }]
  },
  {
    name: '更多相关服务', id: 6, data: [{
      name: '南京工厂废水清运', img: service61
    },{
      name: '厨房油烟囱清洗', img: service62
    },{
      name: '南京下水道疏通', img: service63
    },{
      name: '屋面防水堵漏', img: service64
    },{
      name: '南京化粪池清掏', img: service65
    },{
      name: '南京市政设备维护', img: service66
    }]
  },
]

let dataArr = []
data.map((item, i) => {
  const itemObj = {
    id: item.id,
    name: 'block'+i,
    tag: {
      className: 'serviceItem-tag',
      text: { children: item.name, className: 'serviceItem-tag-name' },
      // icon: { children: 'fire' },
    },
    buttonWrapper: {
      className: 'serviceItem-button-wrapper',
      children: {
        name: 'button',
        className: 'serviceItem-button',
        children: '查看更多' ,
      },
    },
    content: {
      className: 'serviceItem-img-wrapper',
      gutter: 16,
      children: []
    },
  }
  let childArr = []
  item.data.map((item2, index) => {
    const newChild = {
      name: 'block'+index,
      className: 'block',
      md: 6,
      xs: 12,
      children: {
        wrapper: { className: 'serviceItem-block-content' },
        img: {
          children: item2.img,
        },
        content: { children: item2.name },
      },
    }
    childArr.push(newChild)
  })
  itemObj.content.children = childArr;
  dataArr.push(itemObj);
})

// 服务项目
export const ServiceListDataSource = {
  wrapper: { className: 'home-page-wrapper serviceList-wrapper' },
  page: { className: 'home-page serviceList' },
  OverPack: {playScale: 0.3, className: 'OverPack'},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '服务项目',
        className: 'title-h1',
      },
    ],
  },
  tabsWrapper: { className: 'serviceList-tabs-wrapper' },
  block: {
    children: dataArr
  },
};

// 项目详情服务项目
export const ServiceDetailDataSource = {
  wrapper: { className: 'home-page-wrapper serviceDetail-wrapper' },
  page: { className: 'home-page serviceDetail' },
  OverPack: { playScale: 0.3, className: 'OverPack' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '服务项目', className: 'title-h1' },
    ],
  },
};



