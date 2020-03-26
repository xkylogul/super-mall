<template>
<div>
    <cartListItem v-for="item in $store.state.cartList" :key="item.iid" :itemInfo="item">{{item}}</cartListItem>
</div>
</template>
<script>
import cartListItem from './cartListItem'
export default {
  components: { cartListItem }
}
</script>
<style scoped></style>
