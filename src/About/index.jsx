/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import About from './About';
import Culture from './Culture';
import Service from './Service';
import Group from './Group';
import Area from './Area';

import {
  AboutDataSource,
  CultureDataSource,
  ServiceFetureDataSource,
  ServiceGroupDataSource,
  ServiceAreaDataSource
} from './data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
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
      <img key="img" style={{width: '100%', height: '300px'}} src="https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg"/>,
      <About
        id="About"
        key="About"
        dataSource={AboutDataSource}
        isMobile={this.state.isMobile}
      />,
      <Culture
        id="Culture"
        key="Culture"
        dataSource={CultureDataSource}
        isMobile={this.state.isMobile}
      />,
      <Group
        id="Group"
        key="Group"
        dataSource={ServiceGroupDataSource}
        isMobile={this.state.isMobile}
      />,
      <Area
        id="Area"
        key="Area"
        dataSource={ServiceAreaDataSource}
        isMobile={this.state.isMobile}
      />,
      <Service
        id="Service"
        key="Service"
        dataSource={ServiceFetureDataSource}
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
