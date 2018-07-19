<template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(image,i) in carouselImages" :key="i" :src="'/static/' + image"></v-carousel-item>
  </v-carousel>
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
