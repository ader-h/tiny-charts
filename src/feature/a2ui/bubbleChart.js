export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    tooltip:{
      show:true
    },
    yAxis:{
      splitNumber: 4
    },
    xAxis: {
      axisLabel:{
        interval:'auto'
      }
    }
  }
  return defOption
}