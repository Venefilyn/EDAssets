<template>
  <v-container fill-height>
    <v-layout column align-content-space-around justify-space-around>
      <v-flex xs4 style="padding: 0px">
        <v-carousel hide-controls hide-delimiters>
          <v-carousel-item v-for="(image,i) in carouselImages" :key="i" :src="image">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs4 align-center justify-center style="display: flex">
        <img src="/static/img/edassets_larger.png">
      </v-flex>
      <v-flex xs4 style="margin: 24px">
        <h1>Elite Dangerous Assets</h1>
        <h3>All Elite Dangerous assets and content in one place to download</h3>
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
  .v-carousel {
    height: 120px;
  }

  .container {
    padding: 0px;
  }
</style>
