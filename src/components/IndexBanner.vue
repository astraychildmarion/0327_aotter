<template lang="pug">
  swiper(:options="swiperOption")
    router-link(
      v-for="item in article"
      key="index"
      :to="{ name: 'article', params: { index: item.index }}"
      ) 
      swiperSlide
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
        autoplay:true,
        crossFade: true,
        pagination: {
          el: '.swiper-pagination'
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
  margin: 2rem auto;
  width: 100%;
  height: 400px;
}
</style>

