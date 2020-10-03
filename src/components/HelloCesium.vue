<template>
  <div>
    <h1>Vue makes Cesium even more awesome!</h1>

    <div id="CesiumPanelDiv">
      <div id="cesiumContainer"></div>
    </div>

    <v-btn
      href="https://github.com/AnalyticalGraphicsInc/cesium"
      target="_blank"
      class="primary ma-2"
    >
      <span class="ma-2">Cesium Github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: "HelloCesium",
  props: [],
};
</script>

<style>
#CesiumPanelDiv {
  height: 100%;
  max-height: 70vh;
  overflow: hidden;
}
</style>
