<template lang="pug">
  swiper(:options="swiperOption")
    swiperSlide
      img(src="../assets/logo.png")
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'IndexBanner',
  data () {
    return {
      swiperOption: {

      }
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
}
</style>

