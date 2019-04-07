<template lang="pug">
.banner-wrapper
  swiper(:options="swiperOption")
    swiperSlide(v-for="item in article" key="index")
      router-link(:to="{ name: 'BlogArticle', params: { index: item.index }}") 
        img(:src="item.imgSrc")
  .swiper-pagination
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { firestore } from '../store'

export default {
  name: 'IndexBanner',
  data () {
    return {
      swiperOption: {
        noSwiping : false,
        autoplay: true,
        crossFade: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
    }
  },
  firestore () {
    return {
      article: firestore.collection('article'),
    }
  },
  components: {
    swiper,
    swiperSlide,
  }
}
</script>
<style lang="scss">
.banner-wrapper{
  position: relative;
}
.swiper-container{
  margin-bottom: 50px;
  border-bottom: 1px solid #ccc;
}
.swiper-wrapper{
  position: relative;
  margin: 2rem auto;
  width: 100%;
  height: 400px;
  @media (max-width: 767px) {
    height: auto;
    .swiper-slide{
      height: 260px;
      overflow: hidden;
    }
  }
  img{
    max-width: 100%;
    height: auto;
  }
}
.swiper-pagination{
  bottom: 0;
  left: 0;
  right: 0;
  .swiper-pagination-bullet{
    margin: 0 5px;
    width: 20px;
    height: 20px;
    background: $banner-pagination;
    border: $article-border;
    &-active{
      background: $banner-pagination-active;
    }
  }
}
</style>

