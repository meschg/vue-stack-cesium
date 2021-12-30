<template>
  <div>
    <HelloCesium />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

import HelloCesium from "@/components/HelloCesium.vue";

export default defineComponent({
  name: "CesiumView",
  components: {
    HelloCesium,
  },
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
  },
  created() {},
  mounted() {},
  unmounted() {},
  destoryed() {},
});
</script>
