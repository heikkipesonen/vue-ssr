import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
