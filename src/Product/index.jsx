/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import List from './List';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature4 from './Feature4';

import {
  CaseListDataSource,
  Feature10DataSource,
  Feature20DataSource,
  Feature40DataSource
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
      <List
        id="List"
        key="List"
        dataSource={CaseListDataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2"
        key="Feature2"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1"
        key="Feature1"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4"
        key="Feature4"
        dataSource={Feature40DataSource}
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