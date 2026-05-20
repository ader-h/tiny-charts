export default {
  padding: [20, 0, 10, 0],
  theme: 'hdesign-light',
  adaptive: true,
  legend: {
    show: true,
    position: {
      left: '64%',
      top: 'center'
    },
    orient: 'vertical',
  },
  position: {
    center: ['30%', '50%']
  },
  radar: {
    axisName: {
      formatter: (val) => {
        return val.length > 4 ? val.slice(0, 4) + '...' : val;
      }
    },
    axisNameGap: 12
  }
}