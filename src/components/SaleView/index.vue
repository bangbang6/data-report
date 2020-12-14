<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <sale-header></sale-header>
      </template>
      <template>222</template>
    </el-card>
  </div>
</template>

<script>
//驼峰只能是这种后面有大写的形式，后面没大写 比如Header 那么组件名字必须是Header 不能是header
import SaleHeader from './SaleHeader'
export default {
  components: { SaleHeader }
}
</script>

<style>
</style>