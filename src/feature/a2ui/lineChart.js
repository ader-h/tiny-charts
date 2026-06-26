export default function getLineDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive:true,
    tooltip:{
      show:true
    },
    legend:{
      show: true,
      top: 2,
      right: 6,
      left: 'auto'
    },
    yAxis:{
      splitNumber: 4
    },
    xAxis: {
      fullGrid: true,
      axisLabel:{
        interval:'auto',
        alignMinLabel: 'left',
        alignMaxLabel: 'right'
      }
    }
  }
  const dataLen = Object.keys(iChartOpt.data[0]) || 0;
  if ( dataLen < 5 ){
    defOption.area = true
  }
  return defOption
}
