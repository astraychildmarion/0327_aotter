<template lang="pug" functional>
  .articleBlock-wrapper
    b-card(
      :title="props.title",
      :subTitle="props.subTitle",
      :imgSrc="props.imgSrc",
      :imgAlt="props.imgAlt",
      overlay
    )
      b-card-text.article-tag {{ props.catagory }}
      b-card-text Author: {{ props.author }}

</template>
<script>
export default {
  name: 'ArticleBlock',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    author: {
      type: String
    },
    publishDate: {
      type: String
    },
    catagory: {
      type: String
  },
    content:{
      type: String
    },
    index: {
      type: Number
    },
    imgSrc:{
      type: String
    },
  },
}
</script>
<style lang="scss">
.articleBlock-wrapper{
  height: 200px;
  overflow: hidden;
  transition: all .5s;
  .card-title{
    color:#fff;
  }
  .card-text{
    color: #eee;
    font-size: .8rem;
    font-weight: 400;
  }
  .article-tag{
    background-color: rgba(#fff, 0.3);
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: fit-content;
  }
  &:hover{
    box-shadow: 2px 2px 10px 3px #aaa;
    transform: translateY(-5px);
    transition: all .5s;
  }
}
</style>
