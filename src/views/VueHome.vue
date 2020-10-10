<template>
  <div>
    <v-container>
      <v-card class="pa-4">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloVue msg="Welcome to Your Vue.js App" />
        <v-layout text-center wrap> </v-layout>
        <p>Vuex count: {{ count }} || localCount: {{ localCount }}</p>
        <v-btn @click="increment" color="purple" dark class="mr-4"
          >+1 vuex</v-btn
        >
        <v-btn @click="addLocalCount">+1 Local</v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import HelloVue from "@/components/HelloVue.vue";
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "VueHome",
  data: () => ({
    localCount: 0,
  }),
  components: {
    HelloVue,
  },
  computed: mapState(["count"]),
  methods: {
    addLocalCount() {
      this.localCount += 1;
    },
    ...mapMutations(["increment"]),
  },
});
</script>
