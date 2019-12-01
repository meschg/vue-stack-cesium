<template>
  <div class="HelloClassSystle">
    <v-container>
      <v-card class="pa-3">
        <h3>{{msg1}}</h3>
        <h4>{{msg2}}</h4>
        <p>Button counter: {{localCounter}}</p>
        <v-btn @click="increment">+1</v-btn>
        <p>Getter: {{computedMsg}}</p>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex'

// We declare the props separately to make props types inferable.
const AppProps = Vue.extend({
  props: {
    msg1: String,
    msg2: String
  }
})

@Component({
  components: {},
  // Vuex's component binding helper can use here
  computed: mapState([]),
  methods: mapMutations([])
})

export default class HelloClassStyle extends AppProps {
  localString: string = "Testing string"
  localCounter: number = 42;

  increment() {
    this.localCounter++
    console.log("Hello, class increment called.")
  }

  created() {
    console.log("Class style created()")
  }

  mounted() {
    console.log("Class style mounted()")
  }

  destroyed() {
    console.log("Class style destroyed()")
  }

  // computed
  get computedMsg() {
    return 'Computed ' + this.localString
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
