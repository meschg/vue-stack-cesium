<template>
  <div>
    <v-btn
      href="https://github.com/vuejs/composition-api"
      target="_blank"
      class="primary ma-2"
    >
      <span class="ma-2">@vue/composition-api on Github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-card class="ma-4 pa-4">
      <h1>Composition within one compontent</h1>
      <HelloCompositionAPIInternal />
    </v-card>
    <v-card class="ma-4 pa-4">
      <h1>Compostion with HelloComposableOneTwoVuex.ts</h1>
      <HelloCompositionAPIExternal />
    </v-card>
  </div>
</template>

<script lang="ts">
import HelloCompositionAPIInternal from "@/components/HelloCompositionAPIInternal.vue";
import HelloCompositionAPIExternal from "@/components/HelloCompositionAPIExternal.vue";
import Vue from "vue";

export default Vue.extend({
  name: "CompositionAPI",
  components: {
    HelloCompositionAPIInternal,
    HelloCompositionAPIExternal,
  },
});
</script>
