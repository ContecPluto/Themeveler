import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  // { path: '/login', name: 'login', component: { template: '<div>Login</div>' }},
  // { path: '/logout', name: 'logout', component: { template: '<div>Logout</div>' }},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
