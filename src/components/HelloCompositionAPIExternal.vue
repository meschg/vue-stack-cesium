<template>
  <v-container>
    <h1>Hello, CompositionAPI example with EXTERNAL setup files</h1>
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
      <h2>Store commit in file</h2>
      <h3>State Count: {{ storeCounter }}</h3>
      <v-btn @click="incrementVuex" color="purple">+1 vuex</v-btn>
    </v-card>

    <v-card class="ma-4 pa-4">
      <h2>Computed in file</h2>
      <h3>Computed-Dummy: {{ computedStuff.blubbValue }}</h3>
    </v-card>

    <v-card class="ma-4 pa-4">
      <h2>CompositionAPI in Call</h2>
      <p>
        This call works but shows error in VS Code that it is not typesafe :(
      </p>
      <h3>State Count: {{ storeCounter }}</h3>
      <v-btn @click="compositonCallFunction" color="purple">+1 vuex</v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

import fileCompositionOne from "@/composables/HelloComposableOne";
import fileCompositionTwo from "@/composables/HelloComposableTwo";
import fileCompositionVuex from "@/composables/HelloComposableVuex";

export default defineComponent({
  name: "HelloCompositionAPIExternal",
  props: {
    msg: String,
  },
  setup() {
    const { recObj, incrementComp, refValue } = fileCompositionOne();
    const { secondRObj, clickIncrement } = fileCompositionTwo();
    const { vuexRObj, incrementVuex, computedStuff } = fileCompositionVuex();
    return {
      recObj,
      incrementComp,
      refValue,
      secondRObj,
      clickIncrement,
      vuexRObj,
      incrementVuex,
      computedStuff,
    };
  },
  data: () => ({}),
  watch: {},
  computed: mapState(["storeCounter"]),
  methods: {
    ...mapMutations(["incrementStore"]),
    compositonCallFunction() {
      this.incrementVuex();
    },
  },
});
</script>

<style scoped></style>
