
<template>
  <div>
    <v-card class="ma-4 pa-4">
      <h1>Composition within one compontent</h1>
      <HelloCompositionAPIInternal />
    </v-card>
    <v-card class="ma-4 pa-4">
      <h1>Compostion with HelloComposable.ts</h1>
      <HelloCompositionAPIExternal />
    </v-card>
  </div>
</template>


<script lang="ts">
import HelloCompositionAPIInternal from '@/components/HelloCompositionAPIInternal.vue'
import HelloCompositionAPIExternal from '@/components/HelloCompositionAPIExternal.vue'
import { mapState, mapMutations } from 'vuex'

import { ref, reactive } from '@vue/composition-api'

export default {
  name: "vueHome",
  components: {
    HelloCompositionAPIInternal, HelloCompositionAPIExternal
  }
};
</script>

