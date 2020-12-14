<template>
  <common-card title="累计用户数" value="1,775,867">
    <template v-slot:chart>
      <v-chart :options="getOption()"></v-chart>
    </template>
    <template v-slot:total>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">35.7%</span>
        <div class="increase" />
        <span class="month">月同比</span>
        <span class="emphasis">41.2%</span>
        <div class="decrease" />
      </div>
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
        grid: {
          left: 0,
          bottom: 0,
          top: 0,
          right: 0
        },
        xAxis: {
          type: "value",
          show: false //坐标系隐藏 包括横线和文字
        },
        yAxis: {
          type: "category",
          show: false
        },
        series: [{
          type: 'bar',
          data: [200],
          barWidth: 10,
          stack: '总量',
          color: '#45c946',

        }, {
          type: 'bar',
          data: [250],
          stack: '总量', //数据堆叠 两个图进行合并
          color: '#eee'
        }, {
          type: "custom",
          data: [200],
          renderItem (params, api) {
            const value = api.value()
            const endPoint = api.coord([value, 0]) //自动计算200，0 这个点坐标是什么 数据值映射到画布上
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: "M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z",
                    x: -5,
                    width: 10,
                    height: 10,
                    y: -20,
                    layout: "cover",
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d: "M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z",
                    x: -5,
                    width: 10,
                    height: 10,
                    y: 10,
                    layout: "cover",
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;

  .month {
    margin-left: 10px;
  }
}
</style>