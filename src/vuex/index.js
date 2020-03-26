import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const state = {
  iid: null,
  itemInfo: {},
  currentIndex: ['goods', 'paramer', 'talk', 'recommend'],
  topImages: [],
  goods: {},
  shop: {},
  desc: {},
  detailInfo: {},
  paramInfo: {},
  commentInfo: {},
  recommendInfo: [],
  newPrice: '',
  cartList: [],
  categories: []
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
