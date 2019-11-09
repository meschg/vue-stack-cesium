<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloVue msg="Welcome to Your Vue.js App" />

    <div class="ma-4">
      <v-btn class="primary" route to="/vuetify">Route to Vuetify</v-btn>
      <v-btn class="primary mx-2" route to="/cesium">Route to Cesium</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVue from "@/components/HelloVue.vue";

export default {
  name: "vueHome",
  components: {
    HelloVue
  }
};
</script>
