<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-btn class="mx-2" route to="/">Route to Vue</v-btn>
      <v-btn class="mx-2" route to="/cesium">Route to Cesium</v-btn>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloVuetify />
    </v-content>
  </div>
</template>

<script>
import HelloVuetify from "@/components/HelloVuetify.vue";

export default {
  name: "Vuetify",

  components: {
    HelloVuetify
  },

  data: () => ({
    //
  })
};
</script>
