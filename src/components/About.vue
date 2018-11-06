<template>
    <v-container fill-height>
        <v-layout column align-content-space-around justify-space-around d-flex>
            <v-flex>
                <div class="creditLink" :style="cssProps">
                    <h1>About EDAssets</h1>
                    <p>
                        EDAssets was created by CMDR SpyTec and CMDR Garud. All the code for EDAssets is available on <a href="https://www.github.com/SpyTec/EDAssets">GitHub</a>.
                        <br>
                        If you wish to contact EDAssets regarding new assets you can either do that on <a href="https://github.com/SpyTec/EDAssets/issues/new">GitHub</a> or send an <a href="mailto:spytec@protonmail.ch?subject=[EDAssets]">email</a>.
                    </p>
                    <h3>What is EDAssets?</h3>
                    <p>EDAssets is a community website striving to be the main source of consuming concept-art, imagery, icons, and animated logos from Elite Dangerous.</p>
                    <h3>Requesting an asset</h3>
                    <p>
                        If you want an icon from the game or other assets, you can request it through GitHub. If you want to take matters into your own hands and provide a vector to use on the website, feel free to create either an issue with the assets attached or a Pull-Request.
                        <br>
                        <a href="https://github.com/SpyTec/EDAssets/issues/new">
                            <v-btn color="info">Create an Issue</v-btn>
                        </a>
                    </p>
                    <h3>Credits</h3>
                    <p>
                        All assets added to the website have credits associated with them on the website. Those listed here have helpt in other ways: Garud and Moozipan!
                    </p>
                    <h3>Donating</h3>
                    <p>
                        Currently the only cost for EDAssets is the domain. I spend time vectorising assets whenever I feel like it as it takes up a lot of work. If you want an asset done ASAP buying me a coffee will make me do the asset faster. :)
                        <br>
                        <a href="https://www.paypal.me/SpyTec" title="Only cost is domain">
                            <v-btn color="info">Buy me a coffee</v-btn>
                        </a>
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 sm9>

                <v-card-text>
                    <p class="text-md-center">© SpyTec 2015-2018. This website was created using assets and imagery from Elite Dangerous, with the permission of Frontier Developments plc, for non-commercial purposes. It is not endorsed by nor reflects the views or opinions of Frontier Developments and no employee of Frontier Developments was involved in the making of it.</p>
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'About',
  computed: {
    cssProps () {
      return {
        '--accent': this.$vuetify.theme.accent,
        '--accent-light': this.$vuetify.theme.accentLight
      }
    }
  }
}
</script>

<style scoped>
    .creditLink a {
        color: var(--accent);
        text-decoration: none;
        transition: color 150ms;
    }

    .creditLink a:hover {
        transition: color 150ms;
        color: var(--accent-light);
    }

    .logoImage {
        position: absolute;
        z-index: -10
    }
</style>
