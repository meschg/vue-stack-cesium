<template>
  <div class="HelloClassSystle">
    <v-container>
      <v-card class="pa-3">
        <h3>{{ msg1 }}</h3>
        <h4>{{ msg2 }}</h4>
        <p>Button counter: {{ localCounter }}</p>
        <input v-model="localCounter" type="text" />
        <v-btn @click="increment">+1</v-btn>
        <p>Getter: {{ computedMsg }}</p>
      </v-card>
      <v-btn
        href="https://github.com/vuejs/vue-class-component"
        target="_blank"
        class="primary ma-2"
      >
        <span class="ma-2">vue-class-component on Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import router from "@/router/router";

// We declare the props separately to make props types inferable.
const AppProps = Vue.extend({
  props: {
    msg1: String,
    msg2: String,
  },
});

@Component({
  components: {},
  // Vuex's component binding helper can use here
  computed: mapState([]),
  methods: mapMutations([]),
})
export default class HelloClassStyle extends AppProps {
  localString: string = "Testing string";
  localCounter: number = 42;

  increment() {
    this.localCounter++;
    console.log("Hello, class increment called.");
  }

  created() {}

  mounted() {}

  destroyed() {}

  // computed
  get computedMsg(): string {
    return "Computed ";
  }

  storeActions(): void {
    //this.$store.dispatch('dispatchMuatation')
    //this.$store.commit('commitMutation')
  }

  routerActions(): void {
    router.push("classStyle"); // -> /user/123
    console.log("Called for router");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
