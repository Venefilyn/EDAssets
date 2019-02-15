// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.darken2,
    secondary: colors.cyan.darken3,
    accent: colors.cyan.accent4,
    accentLight: colors.cyan.accent2
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-67734804-1',
  router
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
