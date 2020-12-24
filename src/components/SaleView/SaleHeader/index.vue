<template>
  <div class="menu-wrapper">
    <el-menu
      mode="horizontal"
      size="small"
      default-active="1"
      class="sales-view-menu"
      @select="handleSelect"
    >
      <el-menu-item index="1">销售额</el-menu-item>
      <el-menu-item index="2">访问量</el-menu-item>
    </el-menu>
    <div class="menu-right">
      <el-radio-group size="small" v-model="text">
        <el-radio-button label="今日"></el-radio-button>
        <el-radio-button label="本周"></el-radio-button>
        <el-radio-button label="本月"></el-radio-button>
        <el-radio-button label="今年"></el-radio-button>
      </el-radio-group>
      <el-date-picker
        size="small"
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholde="开始日期"
        end-placeholde="结束日期"
        unlink-panels
        class="sales-view-date-picker"
        :picker-options="getOption()"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '今日',
      date: null,

    }
  },
  methods: {
    handleClick (pick, days) {
      let start = new Date()
      let end = new Date()
      start = start.setTime(start.getTime() - days * 24 * 3600 * 1000)
      pick.$emit('pick', [start, end])
    },
    getOption () {
      return {
        shortcuts: [
          {
            text: "最近一周",
            onClick: (pick) => {
              this.handleClick(pick, 7)
            }

          },
          {
            text: "最近一个月",
            onClick: (pick) => {
              this.handleClick(pick, 30)
            }
          },
          {
            text: "最近三个月",
            onClick: (pick) => {
              this.handleClick(pick, 92)
            }
          },
        ]
      }

    },
    handleSelect (index) {
      this.$emit('changeIndex', index)
    }
  }
}
</script>

<style lang='scss' scoped>
.menu-wrapper {
  position: relative;
  display: flex;

  .sales-view-menu {
    width: 100%;
    padding-left: 20px;

    .el-menu-item {
      height: 50px;
      line-height: 50px;
      margin: 0 20px;
    }
  }

  .menu-right {
    position: absolute;
    top: 0;
    right: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .sales-view-date-picker {
      margin-left: 20px;
    }
  }
}
</style>