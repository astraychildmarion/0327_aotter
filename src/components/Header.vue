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
  background: $gradient1;  /* fallback for old browsers */
  background: linear-gradient(to right, $gradient2, $gradient1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  a{
    color: $link-text-color;
  }
}
</style>
