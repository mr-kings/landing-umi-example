import React from 'react';
import TweenOne from 'rc-tween-one';
import { Button, Menu, Dropdown, Input } from 'antd';
import NavLink from 'umi/navlink';
import router from 'umi/router';
import { Link } from 'rc-scroll-anim';
import { FormattedMessage, getLocale, setLocale } from 'umi-plugin-locale'

const { Search } = Input;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  // 手机端点击
  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  // 页面跳转
  onHandleLink (url) {
    router.push(url)
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const pathname = window.location.pathname.split('.html')[0]

    const { phoneOpen } = this.state;
    const { LinkMenu } = dataSource;
    const navData = LinkMenu.children;

    const navChildren = Object.keys(navData).map((key, i) => {
      if (navData[key].childrens && navData[key].childrens.length > 0) {
        const menu = (
          <Menu key={i.toString()}>
            {navData[key].childrens.map((item,index) => {
              return <Menu.Item key={index.toString()} onClick={this.onHandleLink.bind(this,navData[key].href)}>
                <Link {...item}>
                  {item.name}
                </Link>
              </Menu.Item>
            })}
          </Menu>
        );
        return <Dropdown overlay={menu} key={i.toString()}>
            <span key={i.toString()} className={pathname==navData[key].href?'menu-item actived':'menu-item'}>
              <NavLink
                key={i.toString()}
                href={navData[key].href}
                to={navData[key].href}
              >
                {navData[key].name}
              </NavLink>
            </span>
          </Dropdown>
      } else {
        return <span key={i.toString()} className={pathname==navData[key].href?'menu-item actived':'menu-item'}>
              <NavLink
                  key={i.toString()}
                  href={navData[key].href}
                  to={navData[key].href}
                >
                  {navData[key].name}
                </NavLink>
        </span>
      }
    });

    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <NavLink
              href={dataSource.logo.href}
              to={dataSource.logo.href}
            >
              <img width="100%" src={dataSource.logo.children} alt="img" />
              <span>{dataSource.logo.name}</span>
            </NavLink>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...LinkMenu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            {navChildren}
          </TweenOne>
        </div>

      </TweenOne>
    );
  }
}

export default Header;
