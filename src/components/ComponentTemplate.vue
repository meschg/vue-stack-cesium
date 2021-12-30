<template>
  <v-container>
    <h1 class="mt-4">This is just a template</h1>
    <p>No syntax knowledge, much cry!</p>
  </v-container>
</template>

<script lang="ts">
// vue imports
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

// components import

export default defineComponent({
  name: "ComponentTemplate",
  components: {},
  props: {
    prop1: { type: String, required: true },
  },
  setup() {
    return {};
  },
  data: () => ({}),
  watch: {},
  computed: {
    ...mapState([]),
    ...mapGetters([]),
    getterTemplate() {
      return "";
    },
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
    functionTemplate: function () {},
  },
  created() {},
  mounted() {
    this.$store.dispatch("mutationTemplate");
    this.$store.commit("mutationTemplate");
  },
  unmounted() {},
  destoryed() {},
});
</script>

<style scoped></style>
