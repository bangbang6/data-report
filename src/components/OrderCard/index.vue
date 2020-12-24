<template>
  <common-card title="累计订单量" :value="orderToday">
    <template v-slot:chart>
      <v-chart :options="getOption()"></v-chart>
      <!--  <div id="order-chart" :style="{width:'100%',height:'100%'}"></div> -->
    </template>
    <template v-slot:total>
      <span>昨日订单量</span>
      <span class="emphasis">{{orderLastDay}}</span>
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
        xAxis: {
          type: 'category',
          boundaryGup: false
        },
        yAxis: {
          show: false
        },
        series: [{
          data: [460, 770, 690, 530, 360, 480, 300, 250, 340, 690, 390, 720, 890, 800],
          type: 'line',
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  },
  /*  computed: {
     testData () {
       return '111'
     }
   }, */ //自身和mixin合并
  mounted () {
    /* console.log(this.getScreenData()); */ //子mounted优先于父mouted 或者你直接在created时候请求
  }
}
</script>

<style>
</style>