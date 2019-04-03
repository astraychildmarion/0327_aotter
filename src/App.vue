<template lang="pug">
  #app
    Header
    .container
      router-view
</template>
<script>
import Header from './components/Header';
export default{
  components:{
    Header
  }
}
</script>
<style lang="scss">
@import "variables.scss";

</style>
