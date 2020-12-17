<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['word', 'value'],
        rows: [
          { word: "廖振邦", value: 10 * Math.random() },
          { word: "慕课网", value: 10 * Math.random() },
          { word: "华科", value: 10 * Math.random() },
          { word: "武汉", value: 10 * Math.random() },
          { word: "北京", value: 10 * Math.random() },
          { word: "上海", value: 10 * Math.random() },
          { word: "成都", value: 10 * Math.random() },
          { word: "前端", value: 10 * Math.random() },
          { word: "阿里", value: 10 * Math.random() },
        ]

      },
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'],
        shape: 'circle'
      }
    }
  }
}
</script>

<style>
</style>