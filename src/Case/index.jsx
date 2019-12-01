/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import List from './List';
import Adv from '@/components/Advertising';

import {
  CaseListDataSource,
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
    this.timer = null
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
      this.timer = setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  /* 如果不是 dva 2.0 请删除 end */
  }

  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
    this.setState = (state, callback) => {
      return
    }
  }

  render() {
    const children = [
      <Adv
        id="Adv"
        key="Adv"
        isMobile={this.state.isMobile}
      />,
      <List
        id="List"
        key="List"
        dataSource={CaseListDataSource}
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
