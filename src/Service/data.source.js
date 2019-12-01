import service11 from '@/assets/img/service/1/1-1.png';
import service12 from '@/assets/img/service/1/1-2.png';
import service13 from '@/assets/img/service/1/1-3.png';
import service14 from '@/assets/img/service/1/1-4.png';
import service21 from '@/assets/img/service/2/2-1.png';
import service22 from '@/assets/img/service/2/2-2.png';
import service23 from '@/assets/img/service/2/2-3.png';
import service24 from '@/assets/img/service/2/2-4.png';
import service31 from '@/assets/img/service/3/3-1.png';
import service32 from '@/assets/img/service/3/3-2.png';
import service33 from '@/assets/img/service/3/3-3.png';
import service34 from '@/assets/img/service/3/3-4.png';
import service41 from '@/assets/img/service/4/4-1.png';
import service42 from '@/assets/img/service/4/4-2.png';
import service43 from '@/assets/img/service/4/4-3.png';
import service44 from '@/assets/img/service/4/4-4.png';
import service51 from '@/assets/img/service/5/5-1.png';
import service52 from '@/assets/img/service/5/5-2.png';
import service53 from '@/assets/img/service/5/5-3.png';
import service54 from '@/assets/img/service/5/5-4.jpg';
import service61 from '@/assets/img/service/6/6-1.png';
import service62 from '@/assets/img/service/6/6-2.png';
import service63 from '@/assets/img/service/6/6-3.png';
import service64 from '@/assets/img/service/6/6-4.png';

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
    children: [
      {
        id: 1,
        name: 'block0',
        tag: {
          className: 'serviceItem-tag',
          text: { children: '南京管道疏通', className: 'serviceItem-tag-name' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service11,
                },
                content: { children: '南京市政管道疏通' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service12,
                },
                content: { children: '南京生活管道疏通' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service13,
                },
                content: { children: '南京下水道疏通' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service14,
                },
                content: { children: '南京工业管道疏通' },
              },
            },
          ],
        },
      },
      {
        id: 2,
        name: 'block1',
        tag: {
          className: 'serviceItem-tag',
          // icon: { children: 'fire' },
          text: { className: 'serviceItem-tag-name', children: '南京管道清洗' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service21,
                },
                content: { children: '南京市政管道清洗' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service22,
                },
                content: { children: '南京生活管道清洗' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service23,
                },
                content: { children: '南京大型管道清洗' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service24,
                },
                content: { children: '南京工业管道清洗' },
              },
            },
          ],
        },
      },
      {
        id: 3,
        name: 'block2',
        tag: {
          className: 'serviceItem-tag',
          text: { children: '管道检测修复', className: 'serviceItem-tag-name' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service31,
                },
                content: { children: '南京管道CCTV检测' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service32,
                },
                content: { children: '南京大型管道维修' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service33,
                },
                content: { children: '南京管道疏通封堵' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service34,
                },
                content: { children: '南京管道非开挖修复' },
              },
            },
          ],
        },
      },
      {
        id: 4,
        name: 'block3',
        tag: {
          className: 'serviceItem-tag',
          text: { children: '排污系统清理', className: 'serviceItem-tag-name' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service41,
                },
                content: { children: '南京污水池清理' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service42,
                },
                content: { children: '南京化粪池清理' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service43,
                },
                content: { children: '南京隔油池清理' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service44,
                },
                content: { children: '开发区管道系统清理' },
              },
            },
          ],
        },
      },
      {
        id: 5,
        name: 'block4',
        tag: {
          className: 'serviceItem-tag',
          // icon: { children: 'fire' },
          text: { className: 'serviceItem-tag-name', children: '南京河道清淤' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service51,
                },
                content: { children: '南京河道整治清淤' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service52,
                },
                content: { children: '南京水库清淤' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service53,
                },
                content: { children: '南京池塘清淤' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service54,
                },
                content: { children: '南京船舶管道清理' },
              },
            },
          ],
        },
      },
      {
        id: 6,
        name: 'block5',
        tag: {
          className: 'serviceItem-tag',
          text: { children: '更多相关服务', className: 'serviceItem-tag-name' },
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
          children: [
            {
              name: 'block0',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service61,
                },
                content: { children: '南京工厂废水清运' },
              },
            },
            {
              name: 'block1',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service62,
                },
                content: { children: '厨房油烟囱清洗' },
              },
            },
            {
              name: 'block2',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service63,
                },
                content: { children: '屋面防水堵漏' },
              },
            },
            {
              name: 'block3',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children: service64,
                },
                content: { children: '南京窨井清理' },
              },
            },
          ],
        },
      },
    ],
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



