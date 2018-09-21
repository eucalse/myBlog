import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import js from '@/components/js'
import bilibili from '@/components/bilibili'
import adminPage from '@/components/adminPage'
import postbar from '@/components/postbar'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      redirect: '/homePage/js'
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      children: [
        {
          path: 'js',
          name: 'js',
          meta: { keepAlive: true },
          component: js
        },
        {
          path: 'bilibili',
          name: 'bilibili',
          meta: { keepAlive: true },
          component: bilibili
        },
        {
          path: 'postbar',
          name: 'postbar',
          component: postbar
        }
      ]
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/postbar',
      name: 'postbar',
      component: postbar
    },
    {
      path: '/adminPage',
      name: 'adminPage',
      component: adminPage
    }
  ]
})
