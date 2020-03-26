<template>
<div id="tab-bar">
  <router-link class="tab-bar-item" to="/firstpage">
    <span class="iconfont">&#xe604;</span>
  <div>首页</div>
  </router-link>
  <router-link class="tab-bar-item" to="/classify">
  <span class="iconfont">&#xe624;</span>
  <div>分类</div>
  </router-link>
  <router-link class="tab-bar-item" to="/shopcart">
  <span class="iconfont">&#xe6f2;</span>
  <div>购物车</div>
  </router-link>
  <router-link class="tab-bar-item" to="/personally">
  <span class="iconfont">&#xe66e;</span>
  <div >我的</div>
  </router-link>
</div>
</template>
<script>

export default {
  // eslint-disable-next-line no-undef
  name: 'Tabbar'
}
</script>
<style>
 @import '../../assets/svg/iconfont.css';
#tab-bar{
  display:flex;
  background-color:#f6f6f6;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow:0 -3px 1px rbga(100,100,100,.1);
}
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.on{
  color:rgb(255, 0, 0);
}
</style>
