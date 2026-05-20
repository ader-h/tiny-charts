import merge from "../../util/merge";
import defBarOption from "./barChart";
import defLineOption from "./lineChart";
import defGaugeOption from "./gaugeChart";
import defProcessOption from "./processChart";
import defRadarOption from "./radarChart";
import defPieOption from "./pieChart";

function defaultA2uiOption(iChartOption, that) {
  const { padding } = iChartOption;
  const { chartName } = that;
  let defOption = {};
  let position = {};
  const RectShapeCharts = ['LineChart', 'BarChart']
  if (RectShapeCharts.includes(chartName) ) {
    defOption = {
      legend:{
        show: true,
        top: 2,
        right: 10,
        left: 'auto'
      },
      xAxis: {}
    }
    
  } else {
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

  if (['ProcessChart', 'GaugeChart', 'RadarChart'].includes(chartName)) {
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
  } else {
    iChartOption.mini = false;
    if (!['ProcessChart', 'GaugeChart'].includes(chartName)) {
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
    LineChart: defLineOption,
    BarChart: defBarOption,
    GaugeChart: defGaugeOption,
    RadarChart: defRadarOption,
    ProcessChart: defProcessOption,
    PieChart: defPieOption,
  }
  merge(iChartOption, defaultOption[chartName])
  // 图例在顶部
  merge(iChartOption, defaultA2uiOption(iChartOption, that));
  // 判断是否使用mini图表
  setMiniChart(iChartOption, that);

}

export default setA2ui;