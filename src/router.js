import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: () => import('./views/articleList.vue')
    },
    {
      path: '/BlogArticle/:index',
      name: 'BlogArticle',
      component: () => import('./views/BlogArticle.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})