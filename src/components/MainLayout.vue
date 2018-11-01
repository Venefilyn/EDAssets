<template>
  <v-app>
    <ed-navigation-drawer :nav-list="navLists" v-model="drawer"></ed-navigation-drawer>
    <ed-toolbar @toggleDrawer="drawer = !drawer" :subTitle="currentSelected.name" :desc="currentSelected.desc" :zips="currentSelected.zips"></ed-toolbar>
    <v-content>
      <v-container fluid grid-list-lg :style="containerStyle" :fill-height="fillHeight">
        <router-view></router-view>
      </v-container>
    </v-content>
    <ed-footer></ed-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'
import {mapState} from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: true,
      fullHeight: false
    }
  },
  computed: {
    ...mapState({
      navLists: state => state.types.navLists,
      currentSelected: state => state.types.currentSelected
    }),
    containerStyle: function () {
      if (this.$route.path === '/') {
        return {
          padding: '0px'
        }
      } else {
        return undefined
      }
    },
    fillHeight: function () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    'ed-navigation-drawer': NavigationDrawer,
    'ed-toolbar': Toolbar,
    'ed-footer': Footer
  },
  created () {
    this.$store.dispatch('fetchTypes').then(() => {
      this.$store.dispatch('fetchAssetData', this.$route.path.split('/').slice(1))
    })
  }
}
</script>
