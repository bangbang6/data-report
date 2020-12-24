<template>
  <common-card title="累计销售额" :value="'￥'+salesToday">
    <template v-slot:chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{salesGrowthLastDay}}</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{salesGrowthLastMonth}}</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:total>
      <span>昨日销售额</span>
      <span class="emphasis">{{"￥"+salesLastDay}}</span>
    </template>
  </common-card>
</template>

<script>
import CardMixin from '@/mixins/CardMixin'
import DataMixin from '@/mixins/DataMixin'
export default {
  mixins: [CardMixin, DataMixin]
}
</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>