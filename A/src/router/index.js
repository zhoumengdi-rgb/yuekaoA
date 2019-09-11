import Vue from 'vue'
import Router from 'vue-router'

import Home from "../views/Home.vue"
import List from "../views/List.vue"
import Pai from "../views/Pai.vue"
import Book from "../views/Book.vue"



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: ()=>import('../views/Home.vue')
    },
    {
      path: '/list',
      component: ()=>import('../views/List.vue')
    },
    {
      path: '/pai',
      component: ()=>import('../views/Pai.vue')
    },
    {
      path: '/book',
      component: ()=>import('../views/Book.vue')
    },
    {
      path: '/login',
      component: ()=>import('../views/Login.vue')
    },
    {
      path: '/detail/:id',
      component: ()=>import('../views/Detail.vue')
    },
    {
      path: '/',
      redirect: "/home"
    }
  ]
})

router.beforeEach((to,from,next)=>{
    
})

export default router;
