import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,Button } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import { getChildrenToRender } from '../utils/utils';

class Service extends React.PureComponent {
  getChildrenToRender2 = (item) => {
    const {
      wrapper,
      topWrapper,
      buttonWrapper,
      line,
      content,
      image
    } = item.children;
    return (
      <Col key={item.name} {...item}>
        <QueueAnim type="bottom" {...wrapper}>
          <div {...topWrapper}>
            <img key="img" src={image.children}/>
          </div>
          <div {...content} key="content">
            {content.children}
          </div>
          <div {...buttonWrapper} key="button">
            <Button {...buttonWrapper.children.a} />
          </div>
        </QueueAnim>
      </Col>
    );
  };

  // 生成banner
  getChildrenToRenderBanner = (item) => {
      return (<Element key={item[0].name}
                prefixCls="banner-user-elem"
              >
                <TweenOne className="banner-user-title"
                  animation={{ y: 30, opacity: 0, type: 'from' }}
                  id="title"
                >
                  {item.map(this.getChildrenToRender2)}
                </TweenOne>
              </Element>)
}

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      block,
    } = dataSource;

    let newArr = [];
    let b;
    block.children.forEach(function (item, index, array) {
      var a = Math.floor(index / 3);
      if (isMobile && window.innerWidth < 768) {
        a = Math.floor(index / 1);
      }
      if (b !== a) {
        b = a;
        newArr[a] = new Array();
      }
      newArr[a].push(item);
    });
    const childrenToRender = newArr.map(this.getChildrenToRenderBanner);
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              component={Row}
              leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
            >
              <div className="banner2-wrapper" key="wrapper">
                <BannerAnim prefixCls="banner-user" {...dataSource.BannerAnim}>
                  {childrenToRender}
                </BannerAnim>
              </div>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Service;
