<template>
  <div>
    <HelloTypescript propMessage="My journey to Typescript" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import HelloTypescript from "@/components/HelloTypescript.vue";

export default defineComponent({
  name: "TypescriptView",
  components: {
    HelloTypescript,
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
    functionTemplate: function () {},
  },
  created() {},
  mounted() {},
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped></style>
