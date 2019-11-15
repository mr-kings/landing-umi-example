import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { enquireScreen } from 'enquire-js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import Header from './Nav2';
import Footer from './Footer1';

import {
  Nav20DataSource,
  Footer10DataSource,
} from './data.source.js';


NProgress.configure({ showSpinner: false, easing: 'ease', speed: 900, minimum: 0.1 });

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

  UNSAFE_componentWillMount () {
    NProgress.start();
  }

  componentDidMount () {
    NProgress.done();
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  UNSAFE_componentWillUpdate () {
    NProgress.start();
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      NProgress.done();
    }
  }

  render() {
    return (
      <>
        <Header dataSource={Nav20DataSource} isMobile={this.state.isMobile} />
        <div className="contentWrap">
          <TransitionGroup>
            <CSSTransition key={window.location.pathname} classNames="fade" timeout={300}>
                {this.props.children}
              </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
      </>
    );
  }
}
export default withRouter(connect()(Layout));
