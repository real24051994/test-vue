import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(Vuex)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/register', component: Register },
    { path: '/login', component: Login }
  ]
})

export default router
