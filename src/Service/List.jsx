import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Icon, Row, Col, Button } from 'antd';
import { getChildrenToRender } from '@/utils/utils';
import ServiceDetail from '@/components/ServiceDetail';

const TabPane = Tabs.TabPane;

import {
  ServiceDetailDataSource,
} from './data.source';

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      showDetail: false,
      serviceItem: props.dataSource.block[0]
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getListChildren = (data) =>
    data.map((item, i) => {
      if (i < 4) {
        return (
          <Col key={item.name} {...item}>
            <div {...item.children.wrapper}>
              <span {...item.children.img}>
                <img src={item.children.img.children} height="100%" alt="img" />
              </span>
              <p {...item.children.content}>{item.children.content.children}</p>
            </div>
          </Col>
        );
      }
    });

  // 查看更多
  onLookMore = id => {
    const { children } = this.props.dataSource.block
    const serviceItem = children.find(item => Number(item.id) === Number(id));
    this.setState({
      showDetail: true,
      serviceItem
    })
  }

  onGoBack = () => {
    this.setState({
      showDetail: false,
    })
  }

  getBlockChildren = (item, i) => {
    const { tag, content, buttonWrapper } = item;
    const { icon } = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;
    return (
      <TabPane
        key={i + 1}
        tab={
          <div className={tag.className}>
            <Icon type={iconChildren} className={icon.className} />
            <div {...tagText}>{tagText.children}</div>
          </div>
        }
        className={item.className}
      >
        <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        >
          {this.state.current === i + 1 && (
            <Row
              key="content"
              className={content.className}
              gutter={content.gutter}
            >
              {
                this.getListChildren(
                  content.children
                )
              }
              {
                content.children.length > 4 &&
                <div key="button" {...buttonWrapper}>
                  <div {...buttonWrapper.children}><Button onClick={this.onLookMore.bind(this,i+1)}>{buttonWrapper.children.children}</Button></div>
                </div>
              }
            </Row>
          )}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {this.state.showDetail ? this.state.serviceItem && Object.keys(this.state.serviceItem).length > 0 && <><ServiceDetail dataSource={ServiceDetailDataSource} serviceItem={this.state.serviceItem}><div className="serviceItem-button"><Button onClick={this.onGoBack}>返回列表</Button></div></ServiceDetail></> : <><div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <OverPack {...dataSource.OverPack}>
            <TweenOne.TweenOneGroup
              key="tabs"
              enter={{
                y: 30,
                opacity: 0,
                delay: 200,
                type: 'from',
              }}
              leave={{ y: 30, opacity: 0 }}
              {...dataSource.tabsWrapper}
            >
              <Tabs
                key="tabs"
                onChange={this.onChange}
                activeKey={`${this.state.current}`}
                {...dataSource.block}
              >
                {tabsChildren}
              </Tabs>
            </TweenOne.TweenOneGroup>
          </OverPack></>}
        </div>
      </div>
    );
  }
}

export default ServiceList;
