<template>
  <v-container>
    <v-card class="ma-4 pa-4">
      <h2>State in Components</h2>
      <h3>State Count: {{ count }}</h3>
      <v-btn @click="increment" color="purple" dark>+1 vuex</v-btn>
    </v-card>
    <v-card class="ma-4 pa-4">
      <h2>{{ refValue }}</h2>
      <p>
        clickCount is: {{ recObj.clickCount }} || double is:
        {{ recObj.double }} || Items: {{ recObj.itemAmount }}
      </p>
      <v-btn @click="incrementComp" class="primary ma-2"> @click() </v-btn>
      <v-layout wrap>
        <ul>
          <li v-for="(name, index) in recObj.itemList" :key="index">
            {{ name }}
          </li>
        </ul>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { ref, reactive, computed } from "@vue/composition-api";
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "HelloVue",
  props: {
    msg: String,
  },
  setup() {
    return useComposition();
  },
  computed: mapState(["count"]),
  methods: mapMutations(["increment"]),
});

function useComposition() {
  const refValue = ref(42);
  const recObj: any = reactive({
    clickCount: 0,
    itemList: ["cheese", "apple", "Jonny"],
    double: computed(() => recObj.clickCount * 2),
    itemAmount: computed(() => recObj.itemList.length),
  });

  function incrementComp() {
    recObj.clickCount++;
    refValue.value += refValue.value;
    recObj.itemList.push(recObj.clickCount + " + " + refValue.value);
  }

  return {
    recObj,
    incrementComp,
    refValue,
  };
}
</script>

<style scoped></style>
