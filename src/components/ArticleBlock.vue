<template lang="pug" functional>
  .articleBlock-wrapper
    b-card(
      :title="props.title",
      :subTitle="props.subTitle",
      :imgSrc="props.imgSrc",
      :imgAlt="props.imgAlt",
      img-right,
    )
      b-card-text
        h5 {{ props.catagory }}
        h5 Author: {{ props.author }}
        h5 Date: {{ props.publishDate }}

</template>

<script>
export default {
  name: 'ArticleBlock',
  props: {
    title:{
      type: String
    },
    subtitle:{
      type: String
    },
    author:{
      type: String
    },
    publishData:{
      type: String
    },
    catagory:{
      type: String
    },
    content:{
      type: String
    },
    index:{
      type: String
    },
    imgSrc:{
      type: String
    },
  },
}
</script>