//import vue router
import { createRouter, createWebHistory } from 'vue-router'

import AOS from 'aos'
import 'aos/dist/aos.css'

//define a routes
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexLayout.vue')
  }
]

//create router
const router = createRouter({
  history: createWebHistory(),
  routes // config routes
})

router.beforeEach((to, from, next) => {
  AOS.init() // Initialize AOS
  next()
})

export default router
