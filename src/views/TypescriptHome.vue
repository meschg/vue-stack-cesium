//https://github.com/vuejs/vue-class-component/blob/master/example/src/App.vue
<template>
  <div>
    <HelloTypescript msg="My journey to Typescript" />
    <v-container>
      <v-card class="pa-2 ma-2">
        <v-card-title>Compontent data</v-card-title>
        <p>prop: {{ propMessage }}</p>
        <v-text-field
          class="mx-4"
          v-model="helloMsg"
          label="helloMsg"
          filled
          type="text"
        ></v-text-field>
        <p>helloMsg: {{ helloMsg }} || computed msg: {{ computedMsg }}</p>
        <v-btn class="ma-2" @click="greet">Greet with annyoning alert</v-btn>
      </v-card>
      <v-card class="pa-2 ma-2">
        <v-card-title class="pb-0">Vuex Root</v-card-title>
        <h3>State Count: {{ count }}</h3>
        <v-btn @click="increment" color="purple" dark>+ vuex</v-btn>
      </v-card>
      <v-card class="pa-2 ma-2">
        <v-card-title class="pb-0">Vuex Module A</v-card-title>
        <p>
          valueA: {{ moduleA.valueA }} || numberA:
          {{ moduleA.numberA }}
        </p>
        <v-btn @click="aUpdateModuleA(payloadData)" color="gray" dark
          >action Module A</v-btn
        >
      </v-card>
      <v-card class="pa-2 ma-2">
        <v-card-title class="pb-0">Vuex Module B</v-card-title>
        <p>countB: {{ moduleB.countB }}</p>
        <v-btn @click="aIncB" color="light gray">aIncB ModuleB</v-btn>
        <br />
        <br />
        <p>payload B: {{ moduleB.lastPayload }} ||</p>
        <v-btn @click="aConsoleLogPayload(payloadModuleB)" color="gray" dark
          >payload B</v-btn
        >
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloTypescript from "@/components/HelloTypescript.vue";
import { mapState, mapMutations, mapActions } from "vuex";

// We declare the props separately
// to make props types inferable.
const AppProps = Vue.extend({
  props: {
    propMessage: String,
  },
});

@Component({
  components: {
    HelloTypescript,
  },

  // Vuex's component binding helper can use here
  computed: mapState(["count", "moduleA", "moduleB"]),

  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["aUpdateModuleA", "aIncB", "aConsoleLogPayload"]),
  },
})
export default class TypescriptHome extends AppProps {
  // inital data
  name: string = "TypescriptHome";

  // use prop values for initial data
  helloMsg: string = "Hello, " + this.name;
  payloadData = { a: "A", n: 10 };

  // annotate refs type
  $refs!: {
    // helloComponent: Hello
  };

  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  count!: number;
  increment!: () => void;

  // lifecycle hook
  mounted() {
    console.log("TypescriptHome: console log on mounted");
  }

  // computed
  get computedMsg() {
    return "computed " + this.helloMsg;
  }

  get payloadModuleB() {
    return {
      desc: "moduleBPayload, count",
      countB: this.$store.state.moduleB.countB,
    };
  }

  // method
  greet() {
    alert("greeting: " + this.helloMsg);
    //this.$refs.helloComponent.sayHello()
  }

  // direct dispatch example
  incrementIfOdd() {
    //this.$store.dispatch('incrementIfOdd')
  }
}
</script>
