import React, { Component } from 'react';
import Home from '../Home';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-locale'


class Index extends Component {
  componentDidMount () {
    // window.g_app._store.dispatch({
    //   type: 'global/add',
    //   payload: 100,
    // })
  }
  render () {
    return (<>
      {/* <FormattedMessage id="WELCOME_TO_UMI_WORLD" values={{ name: '小伙子' }} />
      {this.props.age} */}
      <Home />
    </>)
  }

}

//字面意思就是，把models的state变成组件的props
function mapStateToProps (state) {
  const { age } = state.global // test就是models命名空间名字
  return {
    age, // 在这return,上面才能获取到
  }
}

export default connect(mapStateToProps)(Index)
