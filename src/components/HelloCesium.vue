<template>
  <v-container>
    <h1 class="mt-4">Hello Cesium!</h1>
    <p>
      <a
        href="https://github.com/AnalyticalGraphicsInc/cesium"
        target="_blank"
        rel="noopener"
        >CesiumJS on github</a
      >
    </p>
    <p>
      <a
        href="https://github.com/nshen/vite-plugin-cesium"
        target="_blank"
        rel="noopener"
        >vite-plugin-cesium on github</a
      >
    </p>
    <div id="cesiumContainer"></div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HelloCesium",
  components: {},
  props: [],
  data: () => ({}),
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
  created() {},
  mounted() {
    this.$store.dispatch("aCsInit").then(() => {
      console.log("HelloCesium.vue.mounted()->$store.dispatch('aCsInit')");
      //this.$store.dispatch("loadStuffAfterAPromise");
    });
  },
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
