import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wholeData: []
  },
  mutations: {
    SETWHOLEDATA(state, payload) {
      state.wholeData = payload
    }
  },
  actions: {
    setWholeData({commit, state}, payload) {
      commit('SETWHOLEDATA', payload)
    }
  }
})
