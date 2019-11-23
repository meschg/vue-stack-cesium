<template>
  <div>
    <v-container>
    <v-card class="pa-3">

        <v-text-field
          v-model="msg"
          label="Number Message"
          filled
          type="number"
        ></v-text-field>
  
    <p>prop: {{ propMessage }}</p>
    <p>msg: {{ msg }}</p>
    <p>helloMsg: {{ helloMsg }}</p>
    <p>computed msg: {{ computedMsg }}</p>

    <h3>  Clicked: {{ count }} times</h3>
      <v-btn @click="increment">+</v-btn>
      </br>
    <v-btn class="ma-2"@click="greet">Greet with annyoning alert</v-btn>
</v-card>
</v-container>
    <HelloTypescript msg="My journey to Typescript"/>

    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloTypescript from '@/components/HelloTypescript.vue'
import { mapState, mapMutations } from 'vuex'

// We declare the props separately
// to make props types inferable.
const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})

@Component({
  components: {
    HelloTypescript,    
  },

  // Vuex's component binding helper can use here
  computed: mapState([
    'count'
  ]),
  methods: mapMutations([
    'increment'
  ])
})
export default class App extends AppProps {
  // inital data
  msg: number = 123
  name: string = "Typescript"

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.name

  // annotate refs type
  $refs!: {
   // helloComponent: Hello
  }

  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  count!: number
  increment!: () => void

  // lifecycle hook
  mounted () {
    console.log("TypescriptHome: console log on mounted")    
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
    //this.$refs.helloComponent.sayHello()
  }

  // direct dispatch example
  incrementIfOdd () {
    //this.$store.dispatch('incrementIfOdd')
  }
}
</script>
