<template>
  <div class="home">
    <top-view></top-view>
    <bottom-view></bottom-view>
    <sale-view></sale-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import BottomView from '@/components/BottomView'
import SaleView from '@/components/SaleView'
import MapView from '@/components/MapView'
export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SaleView,
    MapView,
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>