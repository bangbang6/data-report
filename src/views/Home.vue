<template>
  <div class="home">
    <top-view></top-view>

    <sale-view></sale-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import BottomView from '@/components/BottomView'
import SaleView from '@/components/SaleView'
import MapView from '@/components/MapView'
import { wordcloud, mapScatter, screenData } from '@/api/index.js'

export default {
  name: 'Home',
  data () {
    return {
      wordData: null,
      mapData: null,
      screenData: null
    }
  },
  components: {
    TopView,
    BottomView,
    SaleView,
    MapView,
  },
  provide () {
    return {
      getWordData: this.getWordData, //provide是在Mouted之前初始化的 所以是null
      getMapData: this.getMapData,
      getScreenData: this.getScreenData
    }
  },
  methods: {
    getScreenData () {
      return this.screenData
    },
    getWordData () {
      return this.wordData
    },
    getMapData () {
      return this.mapData
    }
  },
  mounted () {
    wordcloud().then(res => { this.wordData = res })
    mapScatter().then(res => { this.mapData = res.data })
    screenData().then(res => {
      this.screenData = res
    })
  },
  /* beforeCreated () {
    wordcloud().then(res => { this.wordData = res.data })
    mapScatter().then(res => { this.mapData = res.data })
    screenData().then(res => {
      this.screenData = res
    })
  } */
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>