<template>
<div>
   <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
</div>
</template>
<script>
export default {
// eslint-disable-next-line no-undef
  // name: TabContentCategory,
  props: {
    subcategories: {
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>
