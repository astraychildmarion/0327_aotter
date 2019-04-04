<template lang="pug">
  .articleList-wrapper
    b-list-group
      b-list-group-item(v-for="item in article" key="index")
        router-link(
          :to="{ name: 'article', params: { index: item.index }}"
          ) 
          ArticleBlock(
            :imgAlt="item.imgAlt",
            :title="item.title",
            :subTitle="item.subTitle",
            :imgSrc="item.imgSrc",
            :author="item.author",
            :publishData="item.publishData",
            :catagory="item.catagory",
            :content="item.content",
            :index="item.index",
            )
</template>

<script>
import ArticleBlock from '@/components/ArticleBlock.vue'
import { firestore } from '../store'

export default {
  name: 'articleList',
  data () {
    return {
    }
  },
  firestore () {
    return {
      article: firestore.collection('article'),
    }
  },
  components: {
    ArticleBlock
  }
}
</script>
<style lang="scss">
.articleList-wrapper{
  margin: 1rem auto;
}
</style>
