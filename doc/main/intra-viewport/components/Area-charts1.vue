<template>
  <div className="chart-container" :style="{height: '400px', width: '100%'}">
    <div
        class='chart'
        ref="chartContainer"
        style="height: 400px"
        :style="{height: '400px', width: '100%'}"
      >
    </div>
  </div>
</template>
<script>
import IntegrateChart from '../../../../src/index';

export default {
  name: 'BarChart',
  data(){
    return {
      value: 0,
      chartWidth: '1400px',
    }
  },
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    const option = {
        theme: 'light',
        area: true,
        data: [
            { 'Month': 'Jan', 'Domestic': 31, 'Abroad': 37 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestic': 31, 'Abroad': 15 },
            { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
            { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestic': 41, 'Abroad': 22 },
            { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 31, 'Abroad': 11 },
        ],
        xAxis: {
            data: 'Month',
            fullGrid: true,
        },
        yAxis: {
            name: 'Units'
        }
    };
    this.renderChart(option);
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('AreaChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
