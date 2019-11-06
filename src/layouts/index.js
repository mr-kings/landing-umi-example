import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { enquireScreen } from 'enquire-js';
import Header from './Nav2';
import Footer from './Footer1';

import {
  Nav20DataSource,
  Footer10DataSource,
} from './data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    console.info('window.location',window.location.href)
  }

  render() {
    return (
      <>
        <Header dataSource={Nav20DataSource} isMobile={this.state.isMobile} />
        {this.props.children}
        <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
      </>
    );
  }
}
export default withRouter(connect()(Layout));
