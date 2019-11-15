/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Category from './Category';
import List from './List';
import Detail from './Detail';
import Video from './Video';
import Feature from './Feature';

import {
  PartnersCategoryDataSource,
  PartnersListDataSource,
  Feature00DataSource,
  VideoDataSource,
  FeatureDataSource
} from './data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Category
        id="Category"
        key="Category"
        dataSource={PartnersCategoryDataSource}
        isMobile={this.state.isMobile}
      />,
      <List
        id="List"
        key="List"
        dataSource={PartnersListDataSource}
        isMobile={this.state.isMobile}
      />,
      <Detail
        id="Detail"
        key="Detail"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Video
        id="Video"
        key="Video"
        dataSource={VideoDataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature
        id="Feature"
        key="Feature"
        dataSource={FeatureDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
