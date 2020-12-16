<template>
  <div class="wrapper">
    <div class="title">{{title}}</div>
    <div class="number">{{number}}</div>
    <v-chart :options="options"></v-chart>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    number: String
  },
  data () {
    return {
      options: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: {
          type: 'line',
          data: [100, 120, 140, 130, 200, 240, 160, 200, 150, 80, 160],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          smooth: true,
          itemStyle: {
            opacity: 0
          }
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  width: 50%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  .title {
    color: #999;
    font-size: 14px;
  }
  .number {
    font-size: 22px;
    color: #333;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .echarts {
    height: 50px;
  }
}
</style>