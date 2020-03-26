<template>
 <div>
<navbar class="home-nav">
      <template v-slot:center>
        <div>购物车({{cartCount}})</div>
      </template>
    </navbar>
    <cartList class="cart-list"></cartList>
    <buttonBar></buttonBar>
 </div>

</template>

<script>
import navbar from '../components/content/navbar'
import cartList from './shopCart/cartList'
import buttonBar from './shopCart/buttonBar'
export default {
  components: {navbar, buttonBar, cartList},
  computed: {
    shopCartInfo () {
      return this.$store.getters.cartList
    },
    cartCount () {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style scoped>
#cart {
    /*position: relative;*/
    height: 100vh;
  }
.home-nav {
  background-color:pink;
  color: #fff;
}
.cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
