<template>
  <v-container fill-height>
    <v-layout column align-content-space-around justify-space-around d-flex>
      <v-flex xs4 style="padding: 0px">
        <v-carousel hide-controls hide-delimiters height=120>
          <v-carousel-item v-for="(image,i) in carouselImages" :key="i" :src="image" height=120>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs4 style="margin: 0px 24px">
        <h1>Elite Dangerous Assets</h1>
        <h3>All Elite Dangerous assets and content in one place to download</h3>
      </v-flex>
      <v-flex xs4 align-center justify-center d-flex>
        <img src="/static/img/edassets_larger.png" style="flex: 0 1 auto!important">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      carouselImages: state => state.types.carouselImages
    })
  }
}
</script>

<style scoped>
  .container {
    padding: 0px;
  }
</style>
