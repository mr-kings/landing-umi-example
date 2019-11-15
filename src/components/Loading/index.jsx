import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className="loading">
    <Spin size="large" indicator={antIcon} />
  </div>
);
