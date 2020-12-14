<template>
  <common-card title="今日交易用户数" value="767,557">
    <template v-slot:chart>
      <v-chart :options="getOption()"></v-chart>
    </template>
    <template v-slot:total>
      <span>退货率</span>
      <span class="emphasis">5.26%</span>
    </template>
  </common-card>
</template>

<script>
import CardMixin from '@/mixins/CardMixin'
export default {
  mixins: [CardMixin],
  methods: {
    getOption () {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,

          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'] //x轴数据
        },
        yAxis: {
          show: false,

        },
        series: [{
          type: 'bar',
          data: [460, 21, 250, 360, 77, 89, 360, 420, 89, 120, 170],

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