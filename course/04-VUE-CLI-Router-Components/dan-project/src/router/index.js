import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rwd',
    name: 'rwd',
    component: () => import("@/views/Rwd.vue")
  },
  {
    path: '/html5',
    name: 'html5',
    component: () => import("@/views/Html5.vue")
  },
  {
    path: '/nodejs',
    name: 'nodejs',
    component: () => import("@/views/Nodejs.vue")
  },
  {
    path: '/reactjs',
    name: 'reactjs',
    component: () => import("@/views/Reactjs.vue")
  },
  {
    path: '/vuejs',
    name: 'vuejs',
    component: () => import("@/views/Vuejs.vue")
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
