<template>
  <v-layout wrap>
    <v-flex xs12 sm6 md4 lg3 xl1 v-for="(item,i) in currentAssetData.types" :key="i">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3>{{item.name}}</h3>
          </div>
        </v-card-title>
        <v-card-media v-if="item.colour" :style="'backgroundColor:' + item.colour" height="200px" contain></v-card-media>
        <v-card-media v-else-if="item.webm" height="200px" contain>
          <video loop autoplay style="margin:auto">
            <source :src="'/static/' + item.preview" type="video/webm">
          </video>
        </v-card-media>
        <v-card-media v-else-if="item.svg" height="200px" contain>
          <object type="image/svg+xml" :data="'/static/' + item.preview"></object>
        </v-card-media>
        <v-card-media v-else-if="item.preview" :src="'/static/' + item.preview" height="200px" contain></v-card-media>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'AssetDisplay',
  data () {
    return {
      dataJson: []
    }
  },
  computed: {
    ...mapState({
      currentAssetData: state => state.types.currentAssetData
    })
  }
}
</script>
