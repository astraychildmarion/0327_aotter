<template lang="pug">
  swiper(:options="swiperOption")
    swiperSlide(v-for="item in article" key="index")
      router-link(:to="{ name: 'article', params: { index: item.index }}") 
        img(:src="item.imgSrc")
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
.swiper-wrapper{
  position: relative;
  margin: 2rem auto;
  width: 100%;
  height: 400px;
  img{
    max-width: 100%;
    height: auto;
  }
}
</style>

