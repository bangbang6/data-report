/**
 * 千分位格式化
 * @param {*} n 数字
 */
function formatter(n){
    let reg = /\d{1,3}(?=(\d{3})+$)/g
   /*  let matches = `${n}`.match(reg)
    console.log(matches); */ //!匹配到结果 我们知道匹配对的
    //!我们再用replace方法替换 replace依旧是匹配到和match一样的东西 $&表示原字符串
    return `${n}`.replace(reg,'$&'+',')
}

export default {
  inject:['getWordData','getMapData','getScreenData'],
  computed:{
    wordData(){
      return this.getWordData()
    },
    mapData(){
      return this.getMapData()
    },
    screenData(){
      return this.getScreenData()
    },
    salesToday(){
      return this.screenData &&formatter(this.screenData.salesToday)
    },
    salesGrowthLastDay(){
      return this.screenData && this.screenData.salesGrowthLastDay + "%"

    },
    salesGrowthLastMonth(){
      return this.screenData && this.screenData.salesGrowthLastMonth +"%"
    },
    salesLastDay(){
      return this.screenData && formatter(this.screenData.salesLastDay)
    },
    orderToday(){
      return this.screenData && formatter(this.screenData.orderToday)
    },
    orderLastDay(){
      return this.screenData && formatter(this.screenData.orderLastDay)
    },
    userToday(){
      return this.screenData && formatter(this.screenData.userToday)
    },
    userTodayNumber(){
      return this.screenData && this.screenData.userToday

    },
    orderLastDay(){
      return this.screenData && formatter(this.screenData.orderLastDay)
    },
    orderUser(){
      return this.screenData && formatter(this.screenData.orderUser)
    },
    returnRate(){
      return this.screenData && this.screenData.returnRate
    },
    orderUserTrend(){
      return this.screenData && this.screenData.orderUserTrend
    },
    orderUserTrendAxis(){
      return this.screenData && this.screenData.orderUserTrendAxis
    },
   
    
    userLastMonth() {
      return this.screenData && this.screenData.userLastMonth
    },
    
    userGrowthLastDay() {
      return this.screenData && this.screenData.userGrowthLastDay
    },
    userGrowthLastMonth() {
      return this.screenData && this.screenData.userGrowthLastMonth
    },
    orderFullYear() {
      return  this.screenData && this.screenData.orderFullYear
    },
    orderFullYearAxis() {
      return  this.screenData && this.screenData.orderFullYearAxis

    },
    orderRank() {
      return  this.screenData && this.screenData.orderRank

    },
    userFullYear() {
      return  this.screenData && this.screenData.userFullYear

    },
    userFullYearAxis() {
      return  this.screenData && this.screenData.userFullYearAxis

    },
    userRank() {
      return  this.screenData && this.screenData.userRank

    },
    category1(){
      return this.screenData && this.screenData.category.data1
    },
    category2(){
      return this.screenData && this.screenData.category.data2
    },
    
  },
  methods:{
    formatter(v){
      return formatter(v)
    }
  }
  
}