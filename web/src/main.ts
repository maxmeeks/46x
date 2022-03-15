import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Table from './views/Table.vue'

import App from './App.vue'

const routes = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table,
    },
  ],
}

const app = createApp(App)
const pinia = createPinia()
const router = createRouter(routes)

app.use(pinia)
app.use(router)

const vm = app.mount('#app')

export default vm
