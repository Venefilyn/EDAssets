<template>
  <v-toolbar app light fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <router-link to="/">
      <img src="/static/img/edassets.png">
    </router-link>
    <v-toolbar-title>ELITE DANGEROUS ASSETS</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>
