<template>
  <v-container>
    <v-card class="ma-4 pa-4">
      <h2>File One</h2>
      <h3>{{ refValue }}</h3>
      <p>
        clickCount is: {{ recObj.clickCount }} || double is:
        {{ recObj.double }} || Items: {{ recObj.itemAmount }}
      </p>
      <p>{{ recObj.itemList }}</p>
      <v-btn @click="incrementComp" class="primary ma-2"> @click() </v-btn>
    </v-card>
    <v-card class="ma-4 pa-4">
      <h2>File Two</h2>
      <p>{{ secondRObj.clickCount }} clickified {{ secondRObj.clickified }}</p>
      <v-btn @click="clickIncrement">clickIncrement()</v-btn>
    </v-card>
    <v-card class="ma-4 pa-4">
      <h2>State in File</h2>
      <h3>State Count: {{ count }}</h3>
      <v-btn @click="incrementVuex" color="purple" dark>+1 vuex</v-btn>
    </v-card>

    <v-card class="ma-4 pa-4">
      <h2>CompositionAPI in Call</h2>
      <p>This call works but shows error in VS Code :(</p>
      <h3>State Count: {{ count }}</h3>
      <v-btn @click="compositonCallFunction" class="error" dark>+1 vuex</v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { ref, reactive, computed, toRefs } from "@vue/composition-api";
import fileCompositionOne from "@/composables/HelloComposableOne";
import fileCompositionTwo from "@/composables/HelloComposableTwo";
import fileCompositionVuex from "@/composables/HelloComposableVuex";
import { mapState, mapMutations } from "vuex";

import Vue from "vue";

export default Vue.extend({
  name: "HelloVue",
  props: {
    msg: String,
  },
  setup() {
    const { recObj, incrementComp, refValue } = fileCompositionOne();
    const { secondRObj, clickIncrement } = fileCompositionTwo();
    const { vuexRObj, incrementVuex } = fileCompositionVuex();
    return {
      recObj,
      incrementComp,
      refValue,
      secondRObj,
      clickIncrement,
      vuexRObj,
      incrementVuex,
    };
  },
  computed: mapState(["count"]),
  methods: {
    ...mapMutations(["increment"]),
    compositonCallFunction() {
      this.incrementVuex(); // <- Working but not typesave :/
    },
  },
});
</script>

<style scoped></style>
