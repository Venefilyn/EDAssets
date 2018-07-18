import axios from 'axios'

const state = {
  types: [],
  navLists: []
}
const getters = {}
const mutations = {
  setTypes: (state, types) => {
    state.types = types
  },

  setNavLists: (state, types) => {
    state.navLists = []
    types.forEach(type => {
      state.navLists.push({
        name: type.name,
        children: [],
        link: '/' + type.name.replace(/[^\w]/g, '').toLowerCase()
      })
    })
  },

  addNavList: (state, payload) => {
    payload.subcats.forEach(subcat => {
      payload.root[payload.index].children.push({
        name: subcat.name,
        children: [],
        link: payload.root[payload.index].link + '/' + subcat.name.replace(/[^\w]/g, '').toLowerCase()
      })
    })
  }
}
const actions = {
  fetchTypes: ({ commit, state, dispatch }) => {
    axios.get('/static/data/types.json')
      .then(response => {
        commit('setTypes', response.data)
        commit('setNavLists', state.types)
        state.types.forEach((type, i) => {
          dispatch('fetchSubTypes', { file: type.file, index: i, root: state.navLists })
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  fetchSubTypes: ({ commit, dispatch }, payload) => {
    axios.get('/static/data/' + payload.file)
      .then(response => {
        if (response.data[0].subcats) {
          commit('addNavList', { index: payload.index, subcats: response.data[0].subcats, root: payload.root })
          response.data[0].subcats.forEach((subcat, i) => {
            dispatch('fetchSubTypes', { file: subcat.file, index: i, root: payload.root[payload.index].children })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
