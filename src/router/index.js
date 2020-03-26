import Vue from 'vue'
import VueRouter from 'vue-router'
const FirstPage = () => import('../views/firstPage')
const Classify = () => import('../views/classify')
const ShopCart = () => import('../views/shopCart')
const Personally = () => import('../views/personally')
const Detail = () => import('../views/detail')
const Login = () => import('../views/login')
// import DetailCommentInfo from '../views/detailClass/DetailCommentInfo.vue'
// import DetailParamInfo from '../views/detailClass/DetailParamInfo.vue'
// import DetailRecommendInfo from '../views/detailClass/DetailRecommendInfo.vue'
// import DetailShopInfo from '../views/detailClass/DetailShopInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/firstPage',
      meta: {
        isShow: true
      }
    },
    {
      path: '/firstpage',
      component: FirstPage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isShow: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/personally',
      component: Personally,
      meta: {
        isShow: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail',
      // eslint-disable-next-line no-undef
      component: Detail,
      meta: {
        isShow: true
      }
      /*  children: [
        {
          path: '/',
          redirect: '/detailshopinfo'
        },
        {
          path: '/detailshopinfo',
          component: DetailShopInfo
        },
        {
          path: '/detailparaminfo',
          component: DetailParamInfo
        },
        {
          path: '/detailcommentinfo',
          component: DetailCommentInfo
        },
        {
          path: '/detailrecommendinfo',
          component: DetailRecommendInfo
        }
      ] */
    }
  ]
})
