import { createRouter, createWebHistory } from 'vue-router'
import modules from './modules'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    meta: { requiresAuth: false },
  },

  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/full-layout/index.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home/index.vue'),
      },
      ...modules,
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
