import legend from "../../option/config/legend"

export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    title: {
      itemGap: 6
    },
    barWidth: 8,
    labelContent: 'nameWithRatio',
   
  }
  return defOption
}