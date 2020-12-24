<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import DataMixin from '@/mixins/DataMixin'
export default {
  mixins: [DataMixin],
  props: {
    text: String
  },
  data () {
    return {

    }
  },
  computed: {
    options () {
      if (!this.category1 || !this.category2) return
      const data = this.text === '品类' ? this.category1.data1.slice(0, 6) : this.category2.data1.slice(0, 6)
      const axis = this.text === '品类' ? this.category1.axisX.slice(0, 6) : this.category2.axisX.slice(0, 6)
      const total = data.reduce((s, i) => s + i, 0)
      const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']
      console.log(data, axis);
      const chartData = data.map((item, index) => {
        let percent = `${((item / total) * 100).toFixed(2)}%`
        return {
          legendname: axis[index],
          value: item,
          percent,
          itemStyle: {
            color: colors[index]
          },
          name: `${axis[index]} | ${percent}`
        }

      })
      return {
        title: [{
          text: `${this.text}分布`,
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: `累计${this.text}量`,
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
          data: chartData,
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