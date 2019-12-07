import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils/utils';
import echarts from 'echarts';
import JiangsuJson from '@/assets/js/jiangsu.json';

class Group extends React.PureComponent {

  componentDidMount () {
    var { dataSource, isMobile } = this.props;
    var myChart = echarts.init(document.getElementById('groupEchart'));
    var color = ['#1890ff', '#FF8C00', '#aa96da', '#fcbad3', '#00BFFF', '#71c9ce', '#FFD700', '#abedd8', '#cadefc'];
    var dataArr = [];
    var linksArr = [];
    dataSource.block.data.map((item,i) => {
      const dataObj = {
        "name": item.name,
        "value": item.value,
        "symbolSize": isMobile ? item.size/2 : item.size,
        x: i==0 ? 500 : 0,
        y: i==0 ? 56 :0,
        "draggable": true,
        "itemStyle": {
            "normal": {
                "borderColor": color[i],
                "borderWidth": 4,
                "shadowBlur": 30,
                "shadowColor": color[i],
                "color": color[i],
            }
        }
      }
      const linkObj = {
        "source": item.name,
        "target": dataSource.block.data[0].name
      }
      dataArr.push(dataObj);
      linksArr.push(linkObj)
    })
    var option = {
      tooltip: false,
      animationDurationUpdate: function(idx) {
          // 越往后的数据延迟越大
          return idx * 100;
      },
      animationEasingUpdate: 'bounceIn',
      series: [{
          type: 'graph',
          layout: 'force',
          force: {
              repulsion: 300,
              edgeLength: 100
          },
        roam: false,
        focusNodeAdjacency: true,
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            fontSize: isMobile ? 14 : 20,
            fontStyle: '600',
          }
        },
        data: dataArr,
        links: linksArr
      }]
  }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // echart图表自适应
    window.addEventListener("resize", function() {
      myChart.resize();
  });
  }

  render() {
    const { isMobile, dataSource, ...props } = this.props;

    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <div id="groupEchart" style={{width: '100%',height:isMobile ? '300px':'600px'}}></div>
        </div>
      </div>
    );
  }
}

export default Group;
