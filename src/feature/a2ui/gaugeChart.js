import itemStyle from "../../option/config/legend/itemStyle"

export default function getGaugeDefOpt(iChartOpt){
  let defOption = {
    padding: [20,0,10,1],
    theme:  iChartOpt.theme,
    itemStyle: {
      outerGauge: {
        show: false
      }
    },
    adaptive: true
  }
  return defOption
}