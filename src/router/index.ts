import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routesName from '@/app/utils/routes'
import anticovidView from '../views/anticovidView.vue'
import mscleeanview from '@/views/mscleeanview.vue'
import pestview from '@/views/pestview.vue'
import LavanderiaView from '../views/lavanderiaView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesName.home,
    component: HomeView,
    meta: { show: true },
  },
  {
    path: '/anticovid',
    name: 'anticovid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: anticovidView,
    meta: { 
      show: true,
      realname:'Anticovid'
    },
  },
  {
    path: '/Pest-Control-Total ',
    name: 'pest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: pestview,
    meta: { 
      show: true,
      realname:'Pest'
    },
  },
  {
    path: '/lavanderia',
    name: 'lavanderia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LavanderiaView,
    meta: { 
      show: true,
      realname:'Lavandería Premium'
    },
    
  },
  {
    path: '/msclean',
    name: 'msclean',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: mscleeanview,
    meta: { 
      show: true,
      realname:'MsCleean'
    },
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
