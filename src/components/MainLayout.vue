<template>
  <v-app>
    <ed-navigation-drawer :nav-list="navLists" :openState="drawer"></ed-navigation-drawer>
    <ed-toolbar @toggleDrawer="drawer = !drawer"></ed-toolbar>
    <v-content>
      <v-container fluid grid-list-lg>
        <router-view></router-view>
      </v-container>
    </v-content>
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
      drawer: true
    }
  },
  computed: {
    ...mapState({
      navLists: state => state.types.navLists
    })
  },
  components: {
    'ed-navigation-drawer': NavigationDrawer,
    'ed-toolbar': Toolbar
  },
  created () {
    this.$store.dispatch('fetchTypes').then(() => {
      this.$store.dispatch('fetchAssetData', this.$route.path.split('/').slice(1))
    })
  }
}
</script>
