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
          <object type="image/svg+xml" :data="'/static/' + item.preview" class="svgAsset"></object>
        </v-card-media>
        <v-card-media v-else-if="item.preview" :src="'/static/' + item.preview" height="200px" contain></v-card-media>
        <v-card-text style="word-wrap: break-word">
          {{item.desc}}
        </v-card-text>
        <v-chip v-if="item.fanmade">Fanmade Asset</v-chip>
        <v-card-actions>
          <v-btn flat v-for="(downloadItem,i) in item.formats" :key="i" :href="'/static/' + downloadItem.link" target="_blank">
            {{downloadItem.format}}
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

<style scoped>
  .svgAsset {
    display: flex;
    flex: 1 1 auto;
  }
</style>
