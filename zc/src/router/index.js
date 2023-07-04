import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { index: 1 },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { index: 2 },
    component: () => import('../views/About.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    meta: { index: 2 },
    component: () => import('../views/Photo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
