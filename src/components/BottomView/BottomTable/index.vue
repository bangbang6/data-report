<template>
  <div class="table">
    <el-table :data="tableDataNow">
      <el-table-column prop="rank" label="排名" width="80"></el-table-column>
      <el-table-column prop="keyword" label="关键字搜索"></el-table-column>
      <el-table-column prop="searchNumber" label="总搜索量"></el-table-column>
      <el-table-column prop="userNumber" label="搜索用户数"></el-table-column>
      <el-table-column prop="rate" label="点击率" width="80"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev,pager,next"
      :total="42"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import DataMixin from '../../../mixins/DataMixin'

export default {
  mixins: [DataMixin],
  data () {
    return {
      tableData: [

      ],
      page: 1,
      total: 0,
      pageSize: 4
    }
  },
  computed: {
    tableDataNow () {
      return this.tableData.slice((this.page - 1) * 4, this.page * 4)
    },
  },
  methods: {
    handleCurrentChange (page) {
      this.page = page

    },

  },
  watch: {
    wordData (newValue, oldValue) {
      //!因为先provide那里返回(created之前的阶段)一个wordData为null 然后父组件Mouted又返回一个确定值wordData

      let tableData = []

      newValue.forEach((v, index) => {
        tableData.push({
          id: index + 1,
          rank: index + 1,
          keyword: v.word,
          searchNumber: v.count,
          userNumber: v.user,
          rate: `${(v.user / v.count * 100).toFixed(2)}%`
        })
      })
      this.total = tableData.length
      console.log(this.total);
      this.tableData = tableData
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