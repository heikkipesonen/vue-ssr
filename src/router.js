import Vue from 'vue'
import Vuerouter from 'vue-router'
import main from './views/main.vue'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  mode: 'history',
  routes: [
    {
      name: 'frontpage',
      path: '/',
      component: main
    }
  ]
})

export default router
