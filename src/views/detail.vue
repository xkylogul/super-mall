<template>
<div>
 <!-- <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li> -->
        <mt-swipe class="swiper-item">
  <mt-swipe-item class="swiper-list" v-for="(item,index) in $store.state.topImages" :key="index">
      <img :src="item" alt="">
      <div>{{item}}</div>
  </mt-swipe-item>
</mt-swipe>
 <div v-if="Object.keys($store.state.goods).length !== 0" class="base-info">
    <div class="info-title">{{$store.state.goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{$store.state.goods.newPrice}}</span>
      <span class="o-price">{{$store.state.goods.oldPrice}}</span>
      <span class="discount">{{$store.state.goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{$store.state.goods.columns[0]}}</span>
      <span>{{$store.state.goods.columns[1]}}</span>
      <span>{{$store.state.goods.services[$store.state.goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in $store.state.goods.services.length-1" :key="index">
        <img :src="$store.state.goods.services[index-1].icon">
        <span>{{$store.state.goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
  <DetailShopInfo></DetailShopInfo>
  <DetailParamInfo></DetailParamInfo>
  <DetailCommentInfo></DetailCommentInfo>
  <DetailRecommendInfo></DetailRecommendInfo>
  <DetailButtonBar @addCart="addToCart"></DetailButtonBar>
<div>详情页：{{$route.query.iid}}</div>
<div>hahahaahhah</div>
</div>
</template>
<script>
import DetailShopInfo from './detailClass/DetailShopInfo'
import DetailParamInfo from './detailClass/DetailParamInfo'
import DetailCommentInfo from './detailClass/DetailCommentInfo'
import DetailRecommendInfo from './detailClass/DetailRecommendInfo'
// eslint-disable-next-line no-unused-vars
import DetailButtonBar from './detailClass/DetailButtonBar'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line standard/object-curly-even-spacing
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../http/detail.js'
import 'mint-ui/lib/style.css'
// eslint-disable-next-line no-unused-vars
import {Toast} from 'mint-ui'
export default {
  components: {DetailShopInfo, DetailParamInfo, DetailCommentInfo, DetailRecommendInfo, DetailButtonBar},
  methods: {
    addToCart () {
      // console.log('获取购物车信息')
      // eslint-disable-next-line no-unused-vars
      const product = {}
      product.image = this.$store.state.topImages[0]
      product.title = this.$store.state.goods.title
      product.desc = this.$store.state.goods.desc
      product.iid = this.$store.state.iid
      // eslint-disable-next-line no-undef
      product.newPrice = this.$store.state.goods.newPrice
      // 将商品加入到购物车
      this.$store.dispatch('addCart', product)
      // console.log(this.$store.state.cartList
      Toast('已添加成功！')
    }
  },
  activated () {
    // 请求数据
    this.$store.state.iid = this.$route.query.iid
    getDetail(this.$store.state.iid).then(
      res => {
        // console.log(res)
        const data = res.result
        this.$store.itemInfo = data.itemInfo
        this.$store.state.topImages = data.itemInfo.topImages // 获取轮播图数据
        this.$store.state.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services) // 获取商品信息
        this.$store.state.shop = new Shop(data.shopInfo) // 获取店铺信息
        this.$store.state.detailInfo = data.detailInfo
        this.$store.state.desc = data.itemInfo.desc
        this.$store.state.newPrice = data.itemInfo.extra.lowNowPrice
        this.$store.state.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        if (data.rate.list) { // 评论数据
          this.commentInfo = data.rate.list[0]
        }
      })
    // eslint-disable-next-line no-undef
    getRecommend().then(res => {
      console.log(res)
      this.$store.state.recommendInfo = res.data.list
    })
  }
}
</script>
<style scoped>
.swiper-item{
  height:30vh;
}
.swiper-list img{
  width:100%
}
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: red;
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
