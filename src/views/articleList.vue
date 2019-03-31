<template lang="pug">
  .articleList-wrapper
    h1 this is articleList page
    router-link(to="/article") article
    //- router-view 
</template>

<script>
export default {
  name: 'articleList',
}
</script>