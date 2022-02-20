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
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

import AppBar from "@/elements/AppBar.vue";
import router from "./router/router";

export default defineComponent({
  name: "App",
  components: { AppBar },
  setup() {
    return {};
  },
  data: () => ({}),
  watch: {},
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
    functionTemplate: function () {},
  },
  created() {},
  mounted() {
    router.push("cesium");
  },
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped lang="scss"></style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
