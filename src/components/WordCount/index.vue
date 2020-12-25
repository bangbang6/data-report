<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
import DataMixin from '@/mixins/DataMixin'

export default {
  mixins: [DataMixin],
  data () {
    return {
      chartData: {},
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'],
        shape: 'circle'
      }
    }
  },
  watch: {
    wordData (newV) {
      console.log('newv', newV);
      this.chartData = {
        columns: ['word', 'value'],
        rows: newV.map(item => ({
          word: item.word,
          value: item.count
        }))

      }
    }
  }
}
</script>

<style>
</style>