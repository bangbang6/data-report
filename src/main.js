import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'
import vueEcharts from 'vue-echarts'
import './style/index.css'
Vue.component('v-chart',vueEcharts)
Vue.prototype.$echarts = ECharts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
