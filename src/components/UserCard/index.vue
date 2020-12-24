<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template v-slot:chart>
      <v-chart :options="getOption()"></v-chart>
    </template>
    <template v-slot:total>
      <span>退货率</span>
      <span class="emphasis">{{returnRate + '%'}}</span>
    </template>
  </common-card>
</template>

<script>
import CardMixin from '@/mixins/CardMixin'
import DataMixin from '@/mixins/DataMixin'
export default {
  mixins: [CardMixin, DataMixin],
  methods: {
    getOption () {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,

          data: this.orderUserTrendAxis //x轴数据
        },
        yAxis: {
          show: false,

        },
        series: [{
          type: 'bar',
          name: "用户订单量",
          data: this.orderUserTrend,

        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        tooltip: {
          show: true,
          formatter (params) {
            return `时间:${params.name}</br>用户数:${params.value}`
          }
        }
      }
    }
  }
}
</script>

<style>
</style>