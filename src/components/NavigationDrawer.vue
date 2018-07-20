<template>
  <v-navigation-drawer app v-model="openState" style="max-height:none">
    <v-list>
      <v-list-tile @click="routeTo('/')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <template v-for="(navItem,i) in navList">
        <v-list-group v-if="navItem.children.length>0" :key="i" prepend-icon="settings">
          <v-list-tile slot="activator" @click="routeTo(navItem.link)">
            <v-list-tile-title>{{navItem.name}}</v-list-tile-title>
          </v-list-tile>

          <template v-for="(subItem,j) in navItem.children">
            <v-list-group v-if="subItem.children.length>0" :key="j" sub-group>
              <v-list-tile slot="activator" @click="routeTo(subItem.link)">
                <v-list-tile-title>{{subItem.name}}</v-list-tile-title>
                <v-icon>settings</v-icon>
              </v-list-tile>

              <v-list-tile v-for="(subSubItem,k) in subItem.children" :key="k" @click="routeTo(subSubItem.link)">
                <v-list-tile-action>
                  <v-icon>settings</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{subSubItem.name}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="j" @click="routeTo(subItem.link)">
              <v-list-tile-action>
                <v-icon>settings</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{subItem.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list-group>
        <v-list-tile v-else :key="i" @click="routeTo(navItem.link)">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
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
    openState: Boolean
  },
  methods: {
    routeTo: function (link) {
      this.$router.push(link)
      this.$store.dispatch('fetchAssetData', this.$route.path.split('/').slice(1))
    }
  }
}
</script>
