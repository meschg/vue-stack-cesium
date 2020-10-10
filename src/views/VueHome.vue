<template>
  <div>
    <v-container>
      <v-card class="pa-4">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloVue msg="Welcome to Your Vue.js App" />
        <v-layout text-center wrap> </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import HelloVue from "@/components/HelloVue.vue";
import Vue from "vue";

export default Vue.extend({
  name: "VueHome",
  components: {
    HelloVue,
  },
});
</script>
