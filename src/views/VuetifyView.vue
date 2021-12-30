<template>
  <div>
    <HelloVuetify />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import HelloVuetify from "@/components/HelloVuetify.vue";

export default defineComponent({
  name: "VuetifyView",
  components: { HelloVuetify },
  data: () => ({}),
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
