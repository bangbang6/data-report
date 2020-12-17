<template>
  <ve-bmap
    :settings="chartSettings"
    :title="title"
    :tooltip="tooltip"
    :series="series"
    height="100%"
  ></ve-bmap>
</template>

<script>
const mockData = [
  { name: "北京", value: [116.405994, 39.917149, 200] },
  { name: "上海", value: [121.483415, 31.231483, 100] },
  { name: "武汉", value: [114.277378, 30.603689, 150] },
]
export default {
  data () {
    this.chartSettings = {
      key: "G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",
      bmap: {
        center: [104.1141129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {
          'styleJson': [{
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'land',
            'elementType': 'all',
            'stylers': {
              'color': '#f3f3f3'
            }
          }, {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'color': '#fdfdfd'
            }
          }, {
            'featureType': 'highway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'green',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'subway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'local',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          }, {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#fefefe'
            }
          }, {
            'featureType': 'building',
            'elementType': 'all',
            'stylers': {
              'color': '#d1d1d1'
            }
          }, {
            'featureType': 'label',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#999999'
            }
          }]
        }

      }
    }
    return {

      title: {
        text: "慕课外卖销售大盘",
        subtext: "销售趋势统计",
        left: 'center'
      },
      series: [{
        type: 'scatter',
        name: '销售额',
        coordinateSystem: 'bmap',
        data: mockData,
        encode: { value: 2 },
        itemStyle: {
          color: (params) => {
            if (params.data.value[2] > 100) {
              return 'purple'
            } else {
              return '#8d7fec'

            }
          }
        },
        symbolSize: (val) => {
          return val[2] / 10
        },
        label: {
          show: false,
          position: 'right',
          formatter: (paramas) => {
            return `${paramas.data.name} - ${paramas.data.value[2]}`
          }
        },
        emphasis: {
          //鼠标移上去时候label的配置
          label: {
            show: true
          }

        }
      }, {
        name: "top 3",
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: mockData,
        encode: { value: 2 },
        itemStyle: {
          color: (params) => {
            if (params.data.value[2] > 100) {
              return 'purple'
            } else {
              return '#8d7fec'

            }
          },
          shadowBlur: 10,
          shadowColor: '#333'
        },
        symbolSize: (val) => {
          return val[2] / 10
        },
        label: {
          show: false,
          position: 'right',
          formatter: (paramas) => {
            return `${paramas.data.name} - ${paramas.data.value[2]}`
          }
        },
        emphasis: {
          //鼠标移上去时候label的配置
          label: {
            show: true
          }

        },
        hoverAnimation: true,
        rippleEffect: {
          brushType: "stroke",

        }
      }],
      tooltip: {

      }
    }
  },

}
</script>

<style lang='scss' >
.anchorBL {
  display: none;
}
</style>