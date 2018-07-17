<template>
  <v-app>
    <ed-navigation-drawer :nav-list="navLists"></ed-navigation-drawer>
    <ed-toolbar></ed-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'
import Toolbar from '@/components/Toolbar'
import {mapState} from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      types: state => state.types.types,
      navLists: state => state.types.navLists
    })
  },
  components: {
    'ed-navigation-drawer': NavigationDrawer,
    'ed-toolbar': Toolbar
  },
  created () {
    this.$store.dispatch('fetchTypes')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
