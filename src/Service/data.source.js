import React from 'react';

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
          text: { children: '管道疏通工程', className: 'serviceItem-tag-name' },
          icon: { children: 'fire' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
          icon: { children: 'fire' },
          text: { className: 'serviceItem-tag-name', children: '管道疏通工程2' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
          text: { children: '管道疏通工程3', className: 'serviceItem-tag-name' },
          icon: { children: 'fire' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
          text: { children: '管道疏通工程4', className: 'serviceItem-tag-name' },
          icon: { children: 'fire' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
          icon: { children: 'fire' },
          text: { className: 'serviceItem-tag-name', children: '管道疏通工程5' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
          text: { children: '管道疏通工程6', className: 'serviceItem-tag-name' },
          icon: { children: 'fire' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
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
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block4',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block5',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
              },
            },
            {
              name: 'block6',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
                },
                content: { children: 'Ant Design' },
              },
            },
            {
              name: 'block7',
              className: 'block',
              md: 6,
              xs: 24,
              children: {
                wrapper: { className: 'serviceItem-block-content' },
                img: {
                  children:
                    'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
                },
                content: { children: 'Ant Motion' },
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
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '服务项目', className: 'title-h1' },
    ],
  },
};



