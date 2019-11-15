import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
import { Row, Col,BackTop,Popover } from 'antd';
import NavLink from 'umi/navlink';
import { getChildrenToRender } from '../utils/utils';

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  getChildrenToRender2 = (item, i) => {
    if (item && item.href) {
      return (<NavLink
        key={i}
        href={item.href}
        to={item.href}>
        {item.children}
      </NavLink>)
    }
  }

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
            title.isimg && title.isimg === 'true' ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children[0] && childWrapper.children[0].href ? childWrapper.children.map(this.getChildrenToRender2): childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getLiChildren(dataSource.block.children);
    const content = (
      <div>
        <p>返回顶部</p>
      </div>
    );
    return (
      <>
      <Popover placement="left" content={content} trigger="hover">
        <BackTop visibilityHeight={200}/>
      </Popover>
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            {...dataSource.block}
          >
            {childrenToRender}
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
      </>
    );
  }
}

export default Footer;
