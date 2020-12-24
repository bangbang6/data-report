<template>
  <div class="sale-body">
    <div class="sale-chart">
      <v-chart :options="options"></v-chart>
    </div>
    <div class="sale-rank">
      <div class="rank-title">排行榜</div>
      <div class="list-wrapper">
        <div class="list-item" v-for="(item) in rankList" :key="item.no">
          <div :class="['number',+item.no<=3?'top':'']">{{item.no}}</div>
          <div class="name">{{item.name}}</div>
          <div class="score">{{item.money}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataMixin from '../../../mixins/DataMixin'
export default {
  mixins: [DataMixin],
  data () {
    return {

    }
  },
  props: {
    activeIndex: String
  },
  methods: {
    renderOptions (title, data, axis) {
      return {
        xAxis: {
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: {
          type: 'bar',
          data,
          barWidth: "30%"
        },
        color: '#3398DB',
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      }
    }
  },
  //!computed一开始就会建立关联 watch必须动态变化才会执行
  computed: {
    rankList () {
      return this.activeIndex == '1' ? this.orderRank : this.userRank
    },
    options () {
      return this.activeIndex == '1' ? this.renderOptions("年度销售额", this.orderFullYear, this.orderFullYearAxis) : this.renderOptions("年度用户量", this.userFullYear, this.userFullYearAxis)
    }
  },



}
</script>

<style lang='scss' scoped>
.sale-body {
  height: 270px;
  display: flex;
  .sale-chart {
    flex: 0 0 70%;
    height: 100%;
  }
  .sale-rank {
    flex: 1;
    height: 100%;
    overflow: hidden;
    .rank-title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }
    .list-wrapper {
      margin-top: 15px;
      .list-item {
        width: 100%;
        display: flex;
        align-items: center;
        height: 32px;
        padding: 12px 20px 12px 0;
        box-sizing: border-box;
        font-size: 12px;
        .number {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #333;
          &.top {
            border-radius: 50%;
            color: white;
            font-weight: 500;
            background: #000;
          }
        }
        .name {
          color: #333;
          margin-left: 20px;
        }
        .score {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>