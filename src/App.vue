<template>
  <v-app>
    <div id="app">
      <AppBar />
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloTypescript from './components/HelloTypescript.vue';
import AppBar from "@/elements/AppBar.vue";

@Component({
  components: {
    HelloTypescript, AppBar
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
