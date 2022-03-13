<template>
  <v-container>
    <h1 class="mt-4">This is just a template</h1>
    <p>No syntax knowledge, much cry!</p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

// components import

export default defineComponent({
  name: "TemplateCopyPaste",
  components: {},
  props: {},
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

<style scoped lang="scss"></style>
<style lang="scss"></style>
