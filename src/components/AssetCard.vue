<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3>{{cardData.name}}</h3>
      </div>
    </v-card-title>
    <v-card-media v-if="cardData.colour" :style="'backgroundColor:' + cardData.colour" height="200px" contain></v-card-media>
    <v-card-media v-else-if="cardData.webm" height="200px" contain>
      <video loop autoplay style="margin:auto">
        <source :src="cardData.preview" type="video/webm">
      </video>
    </v-card-media>
    <v-card-media v-else-if="cardData.svg" height="200px" contain>
      <object type="image/svg+xml" :data="cardData.preview" class="svgAsset"></object>
    </v-card-media>
    <v-card-media v-else-if="cardData.preview" :src="cardData.preview" height="200px" contain></v-card-media>
    <v-chip v-if="cardData.fanmade" color="accent" text-color="black">Fanmade Asset</v-chip>
    <v-card-actions>
      <v-btn color="secondary" flat v-for="(downloadCardData,i) in cardData.formats" :key="i" :href="downloadCardData.link" target="_blank">
        {{downloadCardData.format}}
      </v-btn>
      <v-btn :style="'color:' + cardData.colour" flat v-if="cardData.colour" @click.stop.prevent="copyColour">
        {{cardData.colour}}
        <input type="hidden" :id="dummyInputId" :value="cardData.colour" readonly>  <!-- dummy input required for copying -->

        <v-snackbar v-model="copyStatusSnackBar" bottom :timeout="snackbarTimeout">
          {{copyStatusText}}
        </v-snackbar>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <span v-show="show">
      <v-card-text class="wrapCardText">
        {{cardData.desc}}
      </v-card-text>
      <v-card-text class="wrapCardText noPadding" v-if="cardData.designer_info">
        <h4>Created By</h4>
      </v-card-text>
      <v-card-text class="wrapCardText bottomPadding" v-for="(designer,i) in cardData.designer_info" :key="i">
        <a :href="designer.url">{{designer.name}}</a>
      </v-card-text>
    </span>
  </v-card>
</template>

<script>
const copyStatusTexts = {
  success: 'Colour copied to clipboard',
  failure: 'Could not copy. Please copy manually'
}

export default {
  name: 'AssetCard',
  data () {
    return {
      show: false,
      copyStatusSnackBar: false,
      copyStatusText: copyStatusTexts.success,
      snackbarTimeout: 2000
    }
  },
  computed: {
    dummyInputId: function () {
      let input = this.cardData.name.replace(/[^\w]/g, '').toLowerCase()
      if (input[0].match(/[A-Z]/gi)) {
        return input
      } else {
        return 'x' + input
      }
    }
  },
  props: {
    cardData: Object
  },
  methods: {
    copyColour () {
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
      let colourToCopy = document.querySelector('#' + this.dummyInputId)
      colourToCopy.style.position = 'absolute'
      colourToCopy.style.left = '-9999px'
      colourToCopy.setAttribute('type', 'text')
      colourToCopy.select()

      try {
        document.execCommand('copy')
        this.copyStatusText = copyStatusTexts.success
        this.copyStatusSnackBar = true
      } catch (err) {
        this.copyStatusText = copyStatusTexts.failure
        this.copyStatusSnackBar = true
      }
      if (selected) {
        colourToCopy.setAttribute('type', 'hidden')
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
    }
  }
}
</script>

<style scoped>
  .svgAsset {
    display: flex;
    flex: 1 1 auto;
  }

  .wrapCardText {
    word-wrap: break-word
  }

  .noPadding {
    padding: 0px 16px 0px 16px
  }

  .bottomPadding {
    padding: 0px 16px 16px 16px
  }
</style>
