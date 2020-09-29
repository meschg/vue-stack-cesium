<template>
  <v-container>
    <p>Count is: {{ state.count }}, double is: {{ state.double }}</p>
    <v-btn @click="increment" class="primary ma-2"> @click() </v-btn>
    <v-layout text-center warp> </v-layout>
  </v-container>
</template>

<script>
import { ref, reactive, computed } from '@vue/composition-api'

export default {
  name: "HelloVue",
  props: {
    msg: String
  },
  setup() {
    const refValue = ref(42)
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
};
</script>

<style scoped>
</style>
