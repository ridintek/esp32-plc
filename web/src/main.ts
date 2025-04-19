import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./Home.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  console.log(to);

  if (to.name !== 'home') {
    return { name: 'home' }
  }

  return true
})

const app = createApp(App)
app.use(router)
app.mount('#app')
