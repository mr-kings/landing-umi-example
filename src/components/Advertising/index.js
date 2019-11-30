/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import advertising from '@/assets/img/banner/4.png';
import advertising_s from '@/assets/img/banner/4_s.png';

export default class Advertising extends React.Component {
  render() {
    return (
      <img key="img" style={{ width: '100%'}} src={this.props.isMobile ? advertising_s : advertising}/>
    );
  }
}
