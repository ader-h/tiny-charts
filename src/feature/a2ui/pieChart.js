export default function getPieDefOpt(iChartOpt){
  let defOption = {
    padding: [20,0,10,0],
    theme:  iChartOpt.theme,
    adaptive:true,
    label:{
      show: iChartOpt.label?.show ?? false
    },
    legend:{
      show:true,
      top: 'center',
      left: '68%',
      orient: 'vertical',
      formatter: (name) => {
        let item = defOption.data.filter((item) => item.name === name)[0];
        return '{title|' + name + '}{value|' + item.value + '}'
      }
    },
    position: {
      center: ['35%','50%'],
      radius: '65%'
    },
    title: {
      itemGap: 6
    }
  }
  if (iChartOpt.legendPosition === 'bottomCenter'){
    defOption.legend = {
      show: true,
      position: {
        left: 'center',
      bottom: 2
      },
      orient: 'horizontal'
    }
  }
  return defOption
}
