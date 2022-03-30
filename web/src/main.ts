import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Equal from 'equal-vue'
import router from '@/router'
import DefaultLayout from './components/DefaultLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'
import '@/styles/tailwind.css'
import 'equal-vue/dist/style.css'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Equal)

app.component('default-layout', DefaultLayout)
app.component('empty-layout', EmptyLayout)

const vm = app.mount('#app')

export default vm
