import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils/utils';
import echarts from 'echarts';
import JiangsuJson from '@/assets/js/jiangsu.json';

class Area extends React.PureComponent {

  componentDidMount () {
    echarts.registerMap('Jiangsu', JiangsuJson);
    var myChart = echarts.init(document.getElementById('echart'));
    var JiangsuGeoCoordMap = {
      '南京市': [118.767413,32.041544],
      '镇江市': [119.452753,32.204402],
      "常州市": [119.946973,31.772752],
      '无锡市': [120.301663,31.574729],
      "苏州市": [120.619585,31.299379],
      "南通市": [120.864608,32.016212],
      "泰州市": [119.915176,32.484882],
      "扬州市": [119.421003,32.393159],
      "淮安市": [119.021265,33.597506],
      "盐城市": [120.139998,33.377631],
      "宿迁市": [118.275162,33.963008],
      "连云港市": [119.178821,34.600018],
      "徐州市": [117.184811,34.261792]
    };
    var JiangsuDatas = [
      [{
        name: '南京市',
        value: 1
      }],	[{
        name: '镇江市',
        value: 0
      }],	[{
        name: '常州市',
        value: 0
      }],	[{
        name: '无锡市',
        value: 0
      }],	[{
        name: '苏州市',
        value: 0
      }],	[{
        name: '南通市',
        value: 0
      }],	[{
        name: '泰州市',
        value: 0
      }],	[{
        name: '扬州市',
        value: 0
      }],	[{
        name: '淮安市',
        value: 0
      }],	[{
        name: '盐城市',
        value: 0
      }],	[{
        name: '宿迁市',
        value: 0
      }],	[{
        name: '连云港市',
        value: 0
      }],[{
        name: '徐州市',
        value: 0
      }]
    ];

    var convertData = function(data) {
      var res = [];
      for(var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = JiangsuGeoCoordMap[dataItem[0].name];
        var toCoord = JiangsuGeoCoordMap['南京市'];
        if(fromCoord && toCoord) {
          res.push([{
            coord: toCoord,
            value: dataItem[0].value
          }, {
            coord: fromCoord,
          }]);
        }
      }
      return res;
    };
    var series = [];
    var color = ['#46bee9', '#ffa022', '#46bee9'];
    [['南京市', JiangsuDatas]].forEach(function(item, i) {
      series.push({
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 10, //箭头指向速度，值越小速度越快
            trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 10, //图标大小
          },
          lineStyle: {
            normal: {
              width: 2, //尾迹线条宽度
              opacity: 1, //尾迹线条透明度
              curveness: .3, //尾迹线条曲直度
              color: color[i],
            }
          },
          data: convertData(item[1])
        }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { //涟漪特效
            period: 7, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 6 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', //显示位置
              offset: [5, 0], //偏移设置
              formatter: function(params){//圆环显示文字
                return params.data.name;
              },
              fontSize: 13
            },
            emphasis: {
              show: true
            }
          },
          symbol: 'circle',
          symbolSize: function(val) {
            return 10 + val[2] * 5; //圆环大小
          },
          itemStyle: {
            normal: {
              show: true,
              color: color[1],
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: JiangsuGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
          }),
        },
        //被攻击点
        // {
        //   type: 'scatter',
        //   coordinateSystem: 'geo',
        //   zlevel: 2,
        //   rippleEffect: {
        //     period: 4,
        //     brushType: 'stroke',
        //     scale: 4
        //   },
        //   label: {
        //     normal: {
        //       show: true,
        //       position: 'right',
        //       //offset:[5, 0],
        //       color: '#0f0',
        //       formatter: '{b}',
        //       textStyle: {
        //         color: "#0f0"
        //       }
        //     },
        //     emphasis: {
        //       show: true,
        //       color: "#f60"
        //     }
        //   },
        //   symbol: 'pin',
        //   symbolSize: 50,
        //   data: [{
        //     name: item[0],
        //     value: JiangsuGeoCoordMap[item[0]].concat([10]),
        //   }],
        // }
      );
    });

    var option = {
      geo: {
        map: 'Jiangsu',
        zoom: 1.2,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: false, //是否允许缩放
        itemStyle: {
          normal: {
            color: '#0D74DD', //地图背景色
            borderColor: '#f2f2f2', //省市边界线00fcff 516a89
            borderWidth: 1
          },
          emphasis: {
            color: 'rgba(37, 43, 61, .5)' //悬浮背景
          }
        }
      },
      series: series
    };
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
          <OverPack {...dataSource.OverPack}>
            <QueueAnim key="u" type="bottom">
              <Row key="row" {...dataSource.block}>
                <Col><div className="area-title">由南京辐射至全江苏</div></Col>
              </Row>
            </QueueAnim>
          </OverPack>
          <div id="echart" style={{width: '100%',height:isMobile ? '400px':'600px'}}></div>
        </div>
      </div>
    );
  }
}

export default Area;
