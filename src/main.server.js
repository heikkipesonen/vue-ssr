import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'

export default context => {
  return Promise.resolve(
    new Vue({
      store,
      router,
      render: h => h(App)
    })
  );
}
