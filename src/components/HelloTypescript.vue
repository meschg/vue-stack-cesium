<template>
  <div class="HelloTypescript">
    <h1 class="mt-4">{{ propMessage }}</h1>
    <p>
      Official
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener"
        >Typescript documentation</a
      >
    </p>
    <p>
      @vue/cli-plugin-typescript
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        target="_blank"
        rel="noopener"
        >on github</a
      >
    </p>
    <v-card class="pa-2 ma-2">
      <v-card-title>Reactive and computed compontent data</v-card-title>
      <v-text-field
        class="mx-4"
        v-model="helloMsg"
        label="helloMsg"
        filled
        type="text"
      ></v-text-field>
      <p>helloMsg: {{ helloMsg }}</p>
      <p>Upper Case computed: {{ computedMsg }}</p>
    </v-card>
    <v-card class="pa-2 ma-2">
      <v-card-title class="pb-0">Vuex Root</v-card-title>
      <h3>State Count: {{ storeCounter }}</h3>
      <v-btn @click="incrementStore" color="purple">+1 vuex</v-btn>
    </v-card>
    <v-card class="pa-2 ma-2">
      <v-card-title class="pb-0">Vuex Module A</v-card-title>
      <p>
        valueA: {{ moduleA.valueA }} || numberA:
        {{ moduleA.numberA }}
      </p>
      <v-btn @click="aUpdateModuleA(payloadData)" color="blue"
        >action Module A</v-btn
      >
    </v-card>
    <v-card class="pa-2 ma-2">
      <v-card-title class="pb-0">Vuex Module B</v-card-title>
      <p>countB: {{ moduleB.countB }}</p>
      <v-btn @click="aIncB" color="blue">+1 ModuleB</v-btn>
      <br />
      <br />
      <p>payload B: {{ moduleB.lastPayload }} ||</p>
      <v-btn @click="aConsoleLogPayload(payloadModuleB)" color="blue"
        >payload B</v-btn
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HelloTypescript",
  components: {},
  props: {
    propMessage: String,
  },
  data: () => ({
    helloMsg: "Hello!!!",
    payloadData: { a: "A", n: 10 },
  }),
  computed: {
    ...mapState(["storeCounter", "moduleA", "moduleB"]),
    ...mapGetters([]),
    computedMsg() {
      return this.helloMsg.toString().toUpperCase();
    },
    payloadModuleB() {
      return {
        desc: "moduleBPayload",
        countB: this.$store.state.moduleB.countB,
      };
    },
  },
  methods: {
    ...mapActions(["aUpdateModuleA", "aIncB", "aConsoleLogPayload"]),
    ...mapMutations(["incrementStore"]),
    functionTemplate: function () {},
  },
  created() {},
  mounted() {},
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped></style>
