<template>
  <v-toolbar app dark :extended="extended" color="primary">
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title slot="extension" v-if="extended">
      <v-tooltip bottom>
        <span slot="activator">{{subTitle}}</span>
        <span>{{desc}}</span>
      </v-tooltip>
    </v-toolbar-title>
    <v-spacer slot="extension" v-if="extended"></v-spacer>
    <v-toolbar-title slot="extension" v-if="extended && zips">Download zips</v-toolbar-title>
    <v-toolbar-items slot="extension" v-if="extended && zips">
      <v-btn v-for="(zip,i) in zips" :key="i" flat :href="zip.link" @click="zipClicked(zip)" @click.middle="zipClicked(zip)">
        {{zip.format}}
      </v-btn>
    </v-toolbar-items>
    <router-link to="/">
      <img src="/static/img/edassets-white.png">
    </router-link>
    <v-toolbar-title>ELITE DANGEROUS ASSETS</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  computed: {
    extended: function () {
      return !!this.subTitle
    }
  },
  props: {
    subTitle: String,
    desc: String,
    zips: Array
  },
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    },
    zipClicked (zip) {
      this.$ga.event('asset', 'download', zip.format)
    }
  }
}
</script>
