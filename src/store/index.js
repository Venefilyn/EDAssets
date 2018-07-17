import Vue from 'vue'
import Vuex from 'vuex'
import types from '@/store/types'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    types
  }
})
