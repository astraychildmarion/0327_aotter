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
      // route level code-splitting
      // this generates a separate chunk (articleList.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "articleList" */ './views/articleList.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "articleList" */ './views/article.vue')
    }
  ]
})
