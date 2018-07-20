<template>
  <v-layout wrap>
    <v-flex xs12 sm6 md4 lg3 xl1 v-for="(item,i) in currentAssetData.types" :key="i">
      <ed-asset-card :cardData="item"></ed-asset-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AssetCard from '@/components/AssetCard'
import {mapState} from 'vuex'

export default {
  name: 'AssetDisplay',
  computed: {
    ...mapState({
      currentAssetData: state => state.types.currentAssetData
    })
  },
  components: {
    'ed-asset-card': AssetCard
  }
}
</script>
