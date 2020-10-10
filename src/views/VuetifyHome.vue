<template>
  <div>
    <HelloVuetify />
  </div>
</template>
+ vuex
<script lang="ts">
import HelloVuetify from "@/components/HelloVuetify.vue";
import Vue from "vue";

export default Vue.extend({
  name: "VuetifyHome",
  components: {
    HelloVuetify,
  },
  data: () => ({
    //
  }),
});
</script>
