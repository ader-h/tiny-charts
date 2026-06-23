export default function getPieDefOpt(iChartOpt){
  let defOption = {
    padding: [20,0,10,0],
    theme:  iChartOpt.theme,
    adaptive:true,
    label:{
      show: iChartOpt.label?.show ?? false
    },
    title: {
      itemGap: 6
    }
  }
  return defOption
}