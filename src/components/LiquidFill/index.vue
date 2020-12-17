<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
function getColor (value) {
  return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
      : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}
export default {
  data () {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.2863
        }]
      },
      chartSettings: {}
    }
  },
  mounted () {
    this.chartSettings = {
      seriesMap: {
        'rate': {
          radius: "80%",
          label: {
            formatter: (params) => {
              return `${(params.data.value * 100).toFixed(2)}%`
            },
            textStyle: {
              fontSize: 30,
              color: '#999',
              fontWeight: 'normal'
            },
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
              color: 'none',
              borderColor: '#aaa4a4',
              borderWidth: 1,
              shadowBlur: 0,
              shadowColor: '#fff'
            }
          },
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style>
</style>