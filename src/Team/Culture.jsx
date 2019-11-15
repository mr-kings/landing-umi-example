import React from './node_modules/react';
import QueueAnim from './node_modules/rc-queue-anim';
import { Row, Col } from './node_modules/antd';
import OverPack from './node_modules/rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils/utils';

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                console.info('block',block)
                return (
                  // <Col key={i.toString()} {...blockProps}>
                    <div key={i.toString()} {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  // </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
