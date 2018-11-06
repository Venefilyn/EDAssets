<template>
  <v-navigation-drawer app v-model="drawerState" style="max-height:none">
    <v-list>
      <v-list-tile @click="getRouteData()" to='/' active-class="primary--text nav-active">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="getRouteData()" to='/about' active-class="primary--text nav-active">
        <v-list-tile-action>
          <v-icon>ed-edassets</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <template v-for="(navItem,i) in navList">
        <v-list-group v-if="navItem.children.length>0" :key="i" :prepend-icon="navItem.icon">
          <v-list-tile slot="activator" @click="getRouteData()" :to='navItem.link' active-class="primary--text nav-active">
            <v-list-tile-title>{{navItem.name}}</v-list-tile-title>
          </v-list-tile>

          <template v-for="(subItem,j) in navItem.children">
            <v-list-group v-if="subItem.children.length>0" :key="j" sub-group>
              <v-list-tile slot="activator" @click="getRouteData()" :to='subItem.link' active-class="primary--text nav-active">
                <v-list-tile-title class="indentOne">{{subItem.name}}</v-list-tile-title>
              </v-list-tile>

              <v-list-tile v-for="(subSubItem,k) in subItem.children" :key="k" @click="getRouteData()" :to='subSubItem.link' active-class="primary--text nav-active">
                <v-list-tile-action>
                </v-list-tile-action>

                <v-list-tile-content class="indentTwo">
                  <v-list-tile-title>{{subSubItem.name}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="j" @click="getRouteData()" :to='subItem.link' active-class="primary--text nav-active">
              <v-list-tile-action>
              </v-list-tile-action>

              <v-list-tile-content class="indentOne">
                <v-list-tile-title>{{subItem.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list-group>
        <v-list-tile v-else :key="i" @click="getRouteData()" :to='navItem.link' active-class="primary--text nav-active">
          <v-list-tile-action>
            <v-icon>{{navItem.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{navItem.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
    navList: Array,
    value: Boolean
  },
  computed: {
    drawerState: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    getRouteData: function () {
      this.$store.dispatch('fetchAssetData', this.$route.path.split('/').slice(1))
    }
  }
}
</script>

<style>
.ed::before {
  margin-top: 100%;
}
.nav-active {
  background: rgba(0,0,0,.04);
}
</style>

<style scoped>
.indentOne {
  padding-left: 16px;
}
.indentTwo {
  padding-left: 30px;
}
</style>
