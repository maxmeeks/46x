import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Table from './views/Table.vue'
import Detail from './views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
