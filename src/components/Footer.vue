<template>
  <v-footer app absolute :height="footerHeight" inset>
    <v-layout wrap style="padding: 0 12px">
    <v-flex xs12 sm3>
      <div>
        Created by CMDR SpyTec and CMDR Garud<br>
        <a href="https://www.github.com/SpyTec/EDAssets">Source code</a><br>
        <a href="mailto:spytec@protonmail.ch?subject=[EDAssets]">Email</a><br>
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=WZZZCEZQ7CW36" title="Only cost is domain">Donate</a><br>
        <a href="https://click.linksynergy.com/fs-bin/click?id=umV0U8vCkV4&amp;offerid=367908.9&amp;type=3&amp;subid=0">Buy Elite Dangerous here</a>
        <img src="https://ad.linksynergy.com/fs-bin/show?id=umV0U8vCkV4&amp;bids=367908.9&amp;type=3&amp;subid=0" style="display: none !important;" width="1" hidden="" height="1" border="0">
      </div>
      </v-flex>
      <v-flex xs12 sm9>
        <div style="text-align: center">© SpyTec 2015-2018. This website was created using assets and imagery from Elite Dangerous, with the permission of Frontier Developments plc, for non-commercial purposes. It is not endorsed by nor reflects the views or opinions of Frontier Developments and no employee of Frontier Developments was involved in the making of it.</div>
      </v-flex>
    </v-layout>
    <img src="/static/img/spytec.png" alt="" class="logoImage" :style="'max-height: ' + this.footerHeight + 'px;'">
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerHeight: 152
    }
  }
}
</script>

<style scoped>
  .v-footer {
    background: #13222A url("/static/img/bg.png");
    color: rgb(76, 107, 138);
  }

  .logoImage {
    position: absolute;
  }
</style>
