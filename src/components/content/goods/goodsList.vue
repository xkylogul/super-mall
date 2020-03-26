<template>
<div class="goods">
     <GoodsItem v-for="(item ,index) in goods" :goodsItem="item" :key="index"/>
</div>
</template>
<script>
import GoodsItem from './goodsItem.vue'
export default {
  // eslint-disable-next-line no-undef
  name: 'GoodsList',
  // eslint-disable-next-line no-undef
  components: { GoodsItem },
  props: {
    goods: {
      type: Array,
      default () {
      // eslint-disable-next-line no-unused-expressions
        []
      }
    }
  }
}
</script>
<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>
