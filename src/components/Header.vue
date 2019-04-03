<template lang="pug">
  b-navbar
    b-navbar-nav
      b-nav-item
        router-link(to="/") Home
      b-nav-item
        router-link(to="/articleList") List
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
.navbar{
  background: #ee0979;  /* fallback for old browsers */
  background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  a{
    color: #fff;
  }
}
</style>
