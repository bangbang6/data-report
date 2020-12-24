<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <sale-header @changeIndex="handleChange"></sale-header>
      </template>
      <template>
        <sale-body :activeIndex="activeIndex"></sale-body>
      </template>
    </el-card>
  </div>
</template>

<script>
//驼峰只能是这种有横杠的形式， 后面没大写 比如Header 那么组件名字必须是Header 不能是header
import SaleHeader from './SaleHeader'
import SaleBody from './SaleBody'
export default {
  components: { SaleHeader, SaleBody },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleChange (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped lang='scss'>
.sales-view {
  margin-top: 20px;
}
</style>