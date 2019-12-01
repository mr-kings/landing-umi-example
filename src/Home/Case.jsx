import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { Carousel } from 'element-react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils/utils';
import 'element-theme-default';

class Case extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
      carousel,
    } = dataSource;
    isMobile && window.innerWidth < 768 ? carousel.height = '130px' : window.innerWidth < 1024 ? carousel.height = '290px' : carousel
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              <Carousel {...carousel}>
                {
                  childWrapper.children.map((item, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <div className={item.className}>
                          <img src={item.children.image} alt="工程案例" />
                          <span className={item.children.titleClassName}>{item.children.title}</span>
                        </div>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Case;
