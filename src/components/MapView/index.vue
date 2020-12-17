<template>
  <div class="map-view">
    <div class="left">
      <Bmap></Bmap>
    </div>
    <div class="right">
      <el-card :body-style="{padding:0}" shadow="hover">
        <template>
          <div class="title">用户月同比增长</div>
          <div class="chart-wrapper">
            <LiquidFill></LiquidFill>
          </div>
        </template>
      </el-card>
      <el-card :body-style="{padding:0}" shadow="hover">
        <template>
          <div class="title">热门搜索</div>
          <div class="chart-wrapper">
            <word-count></word-count>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import Bmap from '../Bmap'
import LiquidFill from '../LiquidFill'
import WordCount from '../WordCount'
export default {
  components: { Bmap, LiquidFill, WordCount }
}
</script>

<style lang='scss' scoped>
.map-view {
  display: flex;
  width: 100%;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 520px;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 60px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>