import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/:id',
    name: 'contactEditor',
    component: () => import('../views/ContactEditor.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
