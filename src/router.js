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
      path: '/article/:index',
      name: 'article',
      component: () => import('./views/article.vue')
    }
  ]
})
