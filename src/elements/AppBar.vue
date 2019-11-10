<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="data:image/png;base64,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"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-btn class="mx-2" route to="/">Route to Vue</v-btn>
      <v-btn class="mx-2" route to="/vuetify">Route to Vuetify</v-btn>
      <v-btn class="mx-2" route to="/cesium">Route to Cesium</v-btn>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/" target="_blank" text>
        <span class="mr-2">This TEMPLATE on Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>