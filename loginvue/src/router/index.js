import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Cuenta from '../views/Cuenta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/cuenta',
    name: 'Cuenta',
    component: Cuenta
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
