<template>
  <div>
    <h1>Cesium is here</h1>
    <div id="CesiumPanelDiv">
      <div id="cesiumContainer"></div>
    </div>
    <span>Cesium Credits:</span>
    <div id="creditDiv"></div>

    <v-btn href="https://github.com/AnalyticalGraphicsInc/cesium" target="_blank" text>
      <span class="mr-2">Cesium Github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "HelloCesium",
  props: []
};
</script>

<style>
#CesiumPanelDiv {
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>
