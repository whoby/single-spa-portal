import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Hello = () => import(/* webpackChunkName: "hello" */ '../views/Hello.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/vue' || process.env.BASE_URL,
  routes
})

export default router
