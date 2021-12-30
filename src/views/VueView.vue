<template>
  <v-container>
    <div class="home">
      <HelloVue msg="Welcome to your Vue TypeScript App" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

import HelloVue from "@/components/HelloVue.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloVue,
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
