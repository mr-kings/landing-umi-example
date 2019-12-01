/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner1 from './Banner1';
import About from './About';
import Service from './Service';
import Case from './Case';
import Process from './Process';
import Feature from './Feature';
import Contact from './Contact';

import {
  Banner10DataSource,
  AboutDataSource,
  ServiceDataSource,
  CaseDataSource,
  ProcessDataSource,
  FeatureDataSource,
  ContactDataSource,
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
    this.timer = null;
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
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <About
        id="About"
        key="About"
        dataSource={AboutDataSource}
        isMobile={this.state.isMobile}
      />,
      <Service
        id="Service"
        key="Service"
        dataSource={ServiceDataSource}
        isMobile={this.state.isMobile}
      />,
      <Case
        id="Case"
        key="Case"
        dataSource={CaseDataSource}
        isMobile={this.state.isMobile}
      />,
      <Process
        id="Process"
        key="Process"
        dataSource={ProcessDataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature
        id="Feature"
        key="Feature"
        dataSource={FeatureDataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact
        id="Contact"
        key="Contact"
        dataSource={ContactDataSource}
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
