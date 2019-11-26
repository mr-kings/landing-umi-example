import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { enquireScreen } from 'enquire-js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Alert } from 'antd';
import NavLink from 'umi/navlink';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import Header from './Nav2';
import Footer from './Footer1';

import {
  Nav20DataSource,
  Footer10DataSource,
} from './data.source.js';


NProgress.configure({ showSpinner: true, easing: 'ease', speed: 900, minimum: 0.1 });

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
      window.scrollTo(0,0)
      NProgress.done();
    }
  }

  render () {
    const onClose = e => {
      console.log(e, 'I was closed.');
    };
    return (
      <>
        <Alert
          message="欢迎来到江苏趣通市政工程有限公司官网"
          type="info"
          banner={true}
          closable
          onClose={onClose}
        />
        <div className="header-top-wraper">
          <div className="header-top">
            <div className="header-top-logo">
              <NavLink
                href={Nav20DataSource.logo.href}
                to={Nav20DataSource.logo.href}
              >
                <img width="100%" src={Nav20DataSource.logo.children} alt={Nav20DataSource.logo.name} />
                <span>{Nav20DataSource.logo.name}</span>
              </NavLink>
            </div>
            <div className="header-top-contact">
              <span className="header-man">联系人：徐经理</span>
              <span className="header-phone">联系方式：13913370505</span>
            </div>
          </div>
        </div>
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
