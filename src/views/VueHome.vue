<template>
  <div class="home">
    <v-container>
      <v-card class="pa-4">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloVue msg="Welcome to Your Vue.js App" />
        <v-layout text-center wrap> </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVue from "@/components/HelloVue.vue";

export default {
  name: "vueHome",
  components: {
    HelloVue,
  },
};
</script>
