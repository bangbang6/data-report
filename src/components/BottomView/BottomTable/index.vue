<template>
  <div class="table">
    <el-table :data="tableData">
      <el-table-column prop="rank" label="排名" width="80"></el-table-column>
      <el-table-column prop="keyword" label="关键字搜索"></el-table-column>
      <el-table-column prop="searchNumber" label="总搜索量"></el-table-column>
      <el-table-column prop="userNumber" label="搜索用户数"></el-table-column>
      <el-table-column prop="rate" label="点击率" width="80"></el-table-column>
    </el-table>
    <el-pagination background layout="prev,pager,next" :total="100" :size="4"></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 1, rank: 1, keyword: "水果", searchNumber: 8200, userNumber: 435, rate: "79%" },
        { id: 2, rank: 2, keyword: "水果", searchNumber: 8200, userNumber: 435, rate: "79%" },
        { id: 3, rank: 3, keyword: "水果", searchNumber: 8200, userNumber: 435, rate: "79%" },
        { id: 4, rank: 4, keyword: "水果", searchNumber: 8200, userNumber: 435, rate: "79%" },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.table {
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0 0;
    box-sizing: border-box;
  }
}
</style>