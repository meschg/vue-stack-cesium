<template>
  <div>
    <v-container>
      <v-card class="pa-3">
        <div>routerProp: {{ routerProp }}</div>
        <div>routerProp2: {{ routerProp2 }}</div>
        <v-text-field
          v-model="msg"
          label="Number Message"
          filled
          type="number"
        ></v-text-field>

        <p>msg: {{ msg }}</p>
        <p>helloMsg: {{ helloMsg }}</p>
        <p>computed msg: {{ computedMsg }}</p>

        <h3>State Count: {{ count }}</h3>
        <v-btn @click="increment" color="purple" dark>+ vuex</v-btn>

        <v-btn class="ma-2" @click="greet">Greet with annyoning alert</v-btn>
      </v-card>
    </v-container>
    <HelloClassStyle msg1="Hello Class Style" msg2="2nd message" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import router from "@/router/router";

// import other components
import HelloClassStyle from "@/components/HelloClassStyle.vue";

// We declare the props separately to make props types inferable.
const AppProps = Vue.extend({
  props: {
    routerProp: String,
    routerProp2: String,
  },
});

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  components: {
    HelloClassStyle,
  },
  // Vuex's component binding helper can use here
  computed: mapState(["count"]),
  methods: mapMutations(["increment"]),
})
export default class ClassStyleHome extends AppProps {
  // Initial data can be declared as instance properties
  msg: number = 123565343;
  name: string = "Typescript";

  // use prop values for initial data
  helloMsg: string = "Hello, " + this.name;

  // annotate refs type
  $refs!: {
    // helloComponent: Hello
  };

  // additional declaration is needed to get the types correctly
  // when you declare some properties in `Component` decorator
  count!: number;
  increment!: () => void;

  // lifecycle hook
  created() {
    console.log("Class style created()");
  }

  mounted() {
    console.log("Class style mounted()");
  }

  destroyed() {
    console.log("Class style destroyed()");
  }

  // computed getters
  get computedMsg(): String {
    return "computed " + this.msg;
  }

  // Component methods can be declared as instance methods
  greet(): void {
    alert("greeting: " + this.msg);
    //this.$refs.helloComponent.sayHello()
  }

  // store commit dispatch example
  storeActions(): void {
    //this.$store.dispatch('dispatchMuatation')
    //this.$store.commit('commitMutation')
    console.log("Store-action called.");
  }

  routerActions(): void {
    //router.push("classStyle") // -> /user/123
    console.log("Router called.");
  }
}
</script>
