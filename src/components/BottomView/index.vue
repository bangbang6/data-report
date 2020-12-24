<template>
  <div class="bottom">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <bottom-chart
              title="搜索用户数"
              :number="userCount"
              :axis="userAxis"
              :chartData="userChartData"
            ></bottom-chart>
            <bottom-chart
              title="搜索量"
              :number="searchCount"
              :axis="searchAxis"
              :chartData="searchChartData"
            ></bottom-chart>
          </div>
          <div class="table-wrapper">
            <bottom-table></bottom-table>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="wrapper1">
            <div class="title-wrapper">分类销售排行</div>
            <el-radio-group v-model="text" size="small" @change="handleChange">
              <el-radio-button label="品类"></el-radio-button>
              <el-radio-button label="商品"></el-radio-button>
            </el-radio-group>
          </div>
        </template>
        <template>
          <div class="pieChartWrapper">
            <category-chart :text="text"></category-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BottomChart from './BottomChart'
import BottomTable from './BottomTable'
import CategoryChart from './CategoryChart'
import DataMixin from '../../mixins/DataMixin'
export default {
  components: { BottomChart, BottomTable, CategoryChart },
  mixins: [DataMixin],
  data () {
    return {
      text: "品类"
    }
  },
  computed: {
    userCount () {
      return this.wordData && this.formatter(this.wordData.reduce((s, i) => s + i.user, 0))
    },
    searchCount () {
      return this.wordData && this.formatter(this.wordData.reduce((s, i) => s + i.count, 0))
    },
    searchAxis () {

      return this.wordData ? this.wordData.map(v => v.word) : []
    },
    userAxis () {
      return this.wordData ? this.wordData.map(v => v.word) : []
    },
    userChartData () {
      return this.wordData ? this.wordData.map(v => v.user) : []

    },
    searchChartData () {
      return this.wordData ? this.wordData.map(v => v.count) : []

    }
  },
  methods: {
    handleChange (text) {
      this.text = text
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  margin-top: 20px;
  .view {
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      font-size: 14px;
      font-weight: 500;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      border-bottom: 1px solid #eee;
    }
    .chart-wrapper {
      display: flex;
    }
    .wrapper1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-radio-group {
        box-sizing: border-box;
        padding: 0 20px 0 0;
      }
    }
    .pieChartWrapper {
      width: 100%;
      height: 395px;
    }
  }
}
</style>