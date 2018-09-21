import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navSelect: 0,
    username: '',
    userStatus: 1

  },
  mutations: {
    navSelectChange (state, val) {
      state.navSelect = val
    },
    user (state, val) {
      state.username = val.user
      state.userStatus = val.userStatus
    },
    logOut (state) {
      state.username = ''
      state.userStatus = 1
    }
  }
})

export default store
