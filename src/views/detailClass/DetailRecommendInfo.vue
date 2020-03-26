<template>
<div class="recommendInfo">
     <GoodsItem v-for="(item ,index) in $store.state.recommendInfo" :goodsItem="item" :key="index"/>
</div>
</template>
<script>
import GoodsItem from '../../components/content/goods/goodsItem'
export default {
  // eslint-disable-next-line no-undef
  name: 'GoodsList',
  // eslint-disable-next-line no-undef
  components: { GoodsItem }
}
</script>
<style scoped>
.recommendInfo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>
