<template>
<div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div >商品分类</div>
      </template>
    </nav-bar>
    <!-- <TabMenu @selectItem="selectItem"></TabMenu> -->
       <tab-content-category :subcategories="showSubcategory"></tab-content-category>
     <tab-control :titles="['综合', '新品', '销量']"
                       @itemClick="tabClick" ref="tabControl1"></tab-control>
     <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
    </div>
</template>
<script>
import NavBar from '../components/content/navbar'
// import TabMenu from './category/TabMenu'
import TabContentDetail from './category/TabContentDetail'
import TabControl from '../components/content/tabControl/Tabcontent.vue'
import TabContentCategory from './category/TabContentCategory'
import {getCategory, getSubcategory, getCategoryDetail} from '../http/category.js'
export default {
  components: {NavBar, TabContentDetail, TabContentCategory, TabControl},
  data () {
    return {
      categoryData: {
      },
      currentIndex: -1
    }
  },
  created () {
    // 1.请求分类数据
    this._getCategory()
  },
  computed: {
    showSubcategory () {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail () {
      if (this.currentIndex === -1) return []
      // eslint-disable-next-line no-tabs
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    tabClick (index) {
      this.index = index
      this.$refs.tabControl1.currentIndex = index
    },
    _getCategory () {
      // eslint-disable-next-line no-undef
      getCategory().then(
        res => {
          this.$store.state.categories = res.data.category.list // 1.获取分类数据
          for (let i = 0; i < this.$store.state.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)// 请求第一个分类的数据
        }
      )
    },
    _getSubcategories (index) {
      this.currentIndex = index
      const mailKey = this.$store.state.categories[index].maitKey
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail('pop')
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      })
    },
    _getCategoryDetail (type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.$store.state.categories[this.currentIndex].miniWallkey
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    selectItem (index) {
      this._getSubcategories(index)
    }
  }
}
</script>
<style scoped>
.home-nav {
  background-color:pink;
  color: #fff;
}
 #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: pink;
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>
