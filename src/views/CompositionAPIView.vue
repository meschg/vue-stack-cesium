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
      <HelloCompositionAPIInternal />
    </v-card>
    <v-card class="ma-4 pa-4">
      <HelloCompositionAPIExternal />
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

import HelloCompositionAPIInternal from "@/components/HelloCompositionAPIInternal.vue";
import HelloCompositionAPIExternal from "@/components/HelloCompositionAPIExternal.vue";

export default defineComponent({
  name: "CompositionAPI",
  components: {
    HelloCompositionAPIInternal,
    HelloCompositionAPIExternal,
  },
  setup() {},
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
  mounted() {},
  unmounted() {},
  destoryed() {},
});
</script>
