<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/elements/AppBar.vue";

export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    //
  })
};
</script>
