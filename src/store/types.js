import axios from 'axios'

const state = {
  types: [],
  navLists: [],
  currentAssetData: {},
  carouselImages: []
}
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
        link: '/' + linkElement(type.name)
      })
    })
  },

  setCurrentAssetData: (state, currentAssetData) => {
    state.currentAssetData = currentAssetData
  },

  setCarouselImages: (state) => {
    let imageArray = []
    for (let i = 0; i < 12; i++) {
      imageArray.push(i + 1)
    }
    state.carouselImages = imageArray.sort(() => {
      return 0.5 - Math.random()
    }).slice(0, 5).map(fileNumber => {
      return '/static/img/carousel/' + fileNumber + '.jpg'
    })
  },

  addNavList: (state, payload) => {
    payload.subcats.forEach(subcat => {
      payload.root[payload.index].children.push({
        name: subcat.name,
        children: [],
        link: payload.root[payload.index].link + '/' + linkElement(subcat.name)
      })
    })
  }
}
const actions = {
  async fetchTypes ({ commit, state, dispatch }) {
    try {
      let response = await axios.get('/static/data/types.json')
      let typeResponse = response.data.sort((a, b) => {
        return a.name > b.name
      })
      commit('setTypes', typeResponse)
      commit('setNavLists', state.types)
      commit('setCarouselImages')
      state.types.forEach((type, i) => {
        dispatch('fetchSubTypes', { file: type.file, index: i, root: state.navLists })
      })
    } catch (err) {
      console.log(err)
    }
  },

  async fetchSubTypes ({ commit, dispatch }, payload) {
    let response = await axios.get('/static/data/' + payload.file)
    if (response.data[0].subcats) {
      commit('addNavList', { index: payload.index, subcats: response.data[0].subcats, root: payload.root })
      response.data[0].subcats.forEach((subcat, i) => {
        dispatch('fetchSubTypes', { file: subcat.file, index: i, root: payload.root[payload.index].children })
      })
    }
  },

  async fetchAssetData ({ commit, state }, payload) {
    let typeElementFile = state.types.find(element => {
      return linkElement(element.name) === payload[0]
    }).file

    let typeResponse = (await axios.get('/static/data/' + typeElementFile)).data[0]
    for (let i = 1; i < payload.length; i++) {
      if (typeResponse.subcats) {
        typeElementFile = typeResponse.subcats.find(element => {
          return linkElement(element.name) === payload[i]
        }).file
        typeResponse = (await axios.get('/static/data/' + typeElementFile)).data[0]
      }
    }
    commit('setCurrentAssetData', typeResponse)
  }
}

let linkElement = element => element.replace(/[^\w]/g, '').toLowerCase()

export default {
  state,
  mutations,
  actions
}
