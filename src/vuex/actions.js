import api from '../api'
const actions = {
  getFrontpage ({commit}) {
     return api.getSingle('frontpage').then((data) => {
       console.log(data)
       commit('setFrontpage', data)
       return data
     })
  }
  /**
   * [actionName description]
   * @param  {[type]} {commit} [description]
   * @param  {[type]} payload  [description]
   * @return {[type]}          [description]
   *
   * actionName ({commit}, payload) {
   *    commit('mutationName', payload)
   * }
   */
}

export default actions
