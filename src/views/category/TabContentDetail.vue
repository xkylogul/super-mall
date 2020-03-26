<template>
<div>
    <goodsItem v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goodsItem>
</div>
</template>
<script>
import goodsItem from '../../components/content/goods/goodsItem'
export default {
  components: {goodsItem},
  props: {
    categoryDetail: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
