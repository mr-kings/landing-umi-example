import React from 'react';
import { Breadcrumb } from 'antd';

export default (props) => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>您当前的位置</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="/index.html">网站首页</Breadcrumb.Item>
    <Breadcrumb.Separator children=">"/>
    <Breadcrumb.Item href={props.firstRoute || ''}>{props.routeName}</Breadcrumb.Item>
    {props.secondRouteName && <Breadcrumb.Separator children=">" />}
    {props.secondRouteName && <Breadcrumb.Item>{props.secondRouteName}</Breadcrumb.Item>}
  </Breadcrumb>
);
