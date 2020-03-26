<template>
  <div id="app">
    <keep-alive>
       <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
      <Tabbar v-show="$route.meta.isShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/content/tabbar.vue'
export default {
  name: 'App',
  components: {Tabbar},
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  // eslint-disable-next-line no-dupe-keys
  methods: {
    reload () {
      this.isRouterAlive = false
      // 在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
  @import "./assets/css/normalize.css"
</style>
