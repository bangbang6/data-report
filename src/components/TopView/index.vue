<template>
  <div class="topView">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <order-card></order-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <sale-card></sale-card>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <user-card></user-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-user-card></total-user-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SaleCard from '../SaleCard'
import OrderCard from '../OrderCard'
import TotalUserCard from '../TotalUserCard'
import UserCard from '../UserCard'
export default {
  components: { SaleCard, UserCard, OrderCard, TotalUserCard }
}
</script>

<style>
</style>