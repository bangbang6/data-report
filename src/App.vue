<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: { Home }
}
</script>

<style lang='scss'>
html,
body,
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
