<template lang="pug">
  .index-wrapper
    IndexBanner
    router-link(
      v-for="item in article"
      key="index"
      :to="{ name: 'BlogArticle', params: { index: item.index }}"
      ) 
      ArticleBlock(
        :imgAlt="item.imgAlt",
        :title="item.title",
        :imgSrc="item.imgSrc",
        :author="item.author",
        :publishData="item.publishData",
        :catagory="item.catagory",
        :content="item.content",
        :index="item.index"
      )
</template>


<script>
// @ is an alias to /src
import IndexBanner from '@/components/IndexBanner.vue'
import ArticleBlock from '@/components/ArticleBlock.vue'
import { firestore } from '../store'

export default {
  name: 'index',
  components: {
    IndexBanner,
    ArticleBlock
  },
  data() {
    return {
    }
  },
  firestore () {
    return {
      article: firestore.collection('article'),
    }
  }
}
</script>
<style lang="scss">
.articleBlock-wrapper{
  margin: 1rem auto;
}
</style>

