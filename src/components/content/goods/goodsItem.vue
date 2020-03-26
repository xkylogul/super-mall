<template>
<div class="goods-item" @click="clickItem">
    <img :src="showImage" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}元</span>
      <span class="collect">{{goodsItem.cfav}}</span>
        <span class="iconfont">&#xe666;</span>
    </div>
</div>
</template>
<script>
export default {
// eslint-disable-next-line no-undef
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImage () {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    clickItem () {
      // console.log(this.goodsItem.iid)
      // this.$router.push('/detail/' + this.goodsItem.iid)
      // eslint-disable-next-line no-unused-vars
      console.log(this.goodsItem.iid)
      // eslint-disable-next-line no-unused-vars
      let iid = this.goodsItem.iid
      this.$router.push({path: '/detail', query: {iid}})
    }
  }
}
</script>
<style scoped>
@import '../../../assets/svg/iconfont.css';
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 46%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: red
  }

  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
  }
</style>
