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
          <div class="score">{{item.score}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rankList: [
        { no: 1, name: '肯德基', score: '323,234' },
        { no: 2, name: '麦当劳', score: '299,132' },
        { no: 3, name: '海底捞', score: '266,223' },
        { no: 4, name: '肯德基', score: '223,445' },
        { no: 5, name: '汉堡王', score: '219,663' },
        { no: 6, name: '真功夫', score: '200,997' },
        { no: 7, name: '肯德基', score: '200,994' },
      ],
      options: {
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
          text: '年度销售额',
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
          data: [200, 350, 400, 450, 500, 550, 200, 350, 400, 450, 500, 550],
          barWidth: '25%'
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
  }

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