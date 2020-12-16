<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
const mockData = [
  { legendname: "地方菜系", value: 41, percentage: "25.35%", itemStyle: { color: '#8d7fec' }, name: "地方菜系 | 25.35%" },
  { legendname: "简易便当", value: 20, percentage: "21.35%", itemStyle: { color: '#5085f2' }, name: "简易便当 | 21.35%" },
  { legendname: "香锅冒菜", value: 63, percentage: "32.35%", itemStyle: { color: '#f8726b' }, name: "香锅冒菜 | 32.35%" },
  { legendname: "汉堡披萨", value: 80, percentage: "41.35%", itemStyle: { color: '#e7e702' }, name: "汉堡披萨 | 41.35%" }
]
export default {
  data () {
    return {
      options: {
        title: [{
          text: "品类分布",
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: "累计订单量",
          subtext: "327",
          x: '34.5%',
          y: '42.5%',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center'
        }],
        series: [{
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                return params.data.legendname
              }
            }
          },
          labelLine: {
            length: 5,
            length2: 3,
            smooth: true
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'],
          itemStyle: {
            borderWidth: 4,
            borderColor: "white"
          }
        }],
        legend: {
          show: true,
          type: 'scroll',
          height: 250,
          orient: 'vertical',
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          },

        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str =
              params.marker + params.data.legendname + '<br />' +
              '数量：' + params.value + '<br />' +
              '占比：' + params.percent + '%'
            return str
          }
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>