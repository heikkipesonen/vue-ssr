import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

/**
 * state
 * @type {Object}
 */
const state = {
  frontpage: {},
  menu: [
    {
      label: 'frontpage',
      link: ''
    },
    {
      spacer: true
    },
    {
      label: 'rooms',
      link: 'rooms'
    },
    {
      label: 'pricing',
      link: 'pricing'
    },
    {
      label: 'blog',
      link: 'blog'
    },
    {
      spacer: true
    },
    {
      label: 'contact',
      link: ''
    }
  ]
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
