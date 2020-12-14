<template>
  <common-card title="累计销售额" value="¥ 57,261,645">
    <template v-slot:chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">90.87%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">146.82%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:total>
      <span>昨日销售额</span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CardMixin from '@/mixins/CardMixin'
export default {
  mixins: [CardMixin]
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