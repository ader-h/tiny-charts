import merge from "../../util/merge";
import defBarOption from "./barChart";
import defLineOption from "./lineChart";
import defGaugeOption from "./gaugeChart";
import defProcessOption from "./processChart";
import defRadarOption from "./radarChart";
import defPieOption from "./pieChart";

import defAssembleBubbleOption from "./assembleBubbleChart";
import defBubbleOption from "./bubbleChart";
import defBulletOption from "./bulletChart";
import defFunnelOption from "./funnelChart";
import defHillOption from "./hillChart";
import defJadeJueOption from "./jadeJueChart";
import defScatterOption from "./scatterChart";
import defCircleProcessChartOption from "./circleProcessChart";



function defaultA2uiOption(iChartOption, that) {
  const { padding } = iChartOption;
  const { chartName } = that;
  let defOption = {
    legend: {}
  };
  let position = {};
  const RectShapeCharts = ['LineChart', 'BarChart', 'BubbleChart', 'HillChart', 'BulletChart', 'ScatterChart'];
  const PolarShapeCharts = ['RadarChart', 'GaugeChart', 'PieChart']
  if (RectShapeCharts.includes(chartName) ) {
    defOption = {
      legend:{
        show: true,
        top: 2,
        right: 6,
        left: 'auto'
      },
      xAxis: {
        axisLabel:{
          interval:'auto',
          alignMaxLabel: 'right'
        }
      }
    }
  }
  if (PolarShapeCharts.includes(chartName) ) {
    defOption = {
      legend: ['RadarChart', 'GaugeChart'].includes(chartName) ? {}:{
        show:true,
        top: 'center',
        left: '68%',
        orient: 'vertical'
      },
      position: {
        center: ['RadarChart', 'GaugeChart'].includes(chartName) ? ['50%','50%'] : ['35%','50%'],
        radius: '65%'
      }
    }
  }
  if(chartName === 'JadeJueChart') {
     defOption = {
      legend: ['RadarChart', 'GaugeChart'].includes(chartName) ? {}:{
        show:true,
        top: 'center',
        left: '68%',
        orient: 'vertical'
      }
    }
  }

  if (['ProcessChart', 'GaugeChart', 'RadarChart','CircleProcessChart'].includes(chartName)) {
    defOption.legend.show = false
  }
  if (['LineChart'].includes(chartName)) {
    defOption.xAxis.fullGrid = true;
    defOption.xAxis.axisLabel = {
      alignMinLabel: 'left',
      alignMaxLabel: 'right'
    }
  }

  return {
    padding: padding || [32, 4, 4, 0],
    ...defOption
  }

}

function setMiniChart(iChartOption, that){
  const { chartName } = that
  let { dataZoom, data } = iChartOption;
  let domRect = that.dom.getBoundingClientRect();
  if (['LineChart', 'BarChart'].includes(chartName) && domRect.height < 60) {
    iChartOption.mini = true;
    if(dataZoom){
      dataZoom.left = 10;
    } else {
      dataZoom = {
        left: 0
      }
    }
    iChartOption.legend.show = false;
    
  } else if( ['PieChart', 'RadarChart', 'GaugeChart' ].includes(chartName)  && domRect.width < 200 || domRect.height < 120 ){
    iChartOption.mini = true;
    iChartOption.position = {
      center: ['50%', '50%'],
      radius: '75%'
    }
    iChartOption.tooltip = {
      show: false
    }
  } else if( chartName === 'ProcessChart' && domRect.height < data.length * 38){
    iChartOption.mini = true;
    iChartOption.legend.show = false;
  } else if( chartName === 'CircleProcessChart' && domRect.width < 80 || domRect.height < 80){
    iChartOption.mini = true;
    iChartOption.position = {
      center: ['50%', '50%'],
      radius: '75%'
    }
    iChartOption.tooltip = {
      show: false
    }
  } else {
    iChartOption.mini = false;
    if (!['ProcessChart', 'GaugeChart','CircleProcessChart'].includes(chartName)) {
      iChartOption.legend.show = true
    }
    if(dataZoom){
      delete dataZoom.left
    } 
  }
}

function setA2ui(iChartOption, that){
  const { chartName } = that;

  const defaultOption = {
    get LineChart() { return defLineOption(iChartOption) },
    get BarChart() { return defBarOption(iChartOption) },
    get GaugeChart() { return defGaugeOption(iChartOption) },
    get RadarChart() { return defRadarOption(iChartOption) },
    get ProcessChart() { return defProcessOption(iChartOption) },
    get PieChart() { return defPieOption(iChartOption) },
    get AssembleBubbleChart() { return defAssembleBubbleOption(iChartOption) },
    get BubbleChart() { return defBubbleOption(iChartOption) },
    get BulletChart() { return defBulletOption(iChartOption) },
    get FunnelChart() { return defFunnelOption(iChartOption) },
    get HillChart() { return defHillOption(iChartOption) },
    get JadeJueChart() { return defJadeJueOption(iChartOption) },
    get ScatterChart() { return defScatterOption(iChartOption) },
    get CircleProcessChart() { return defCircleProcessChartOption(iChartOption) },
  }

  merge(iChartOption, defaultOption[chartName])

  // 图例在顶部
  merge(iChartOption, defaultA2uiOption(iChartOption, that));
  // 判断是否使用mini图表
  setMiniChart(iChartOption, that);
}

export default setA2ui;