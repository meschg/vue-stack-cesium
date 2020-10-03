<template>
  <div>
    <HelloCesium />
    <p>$store.state.count: {{ $store.state.count }}</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloCesium from "@/components/HelloCesium.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "vueHome",
  components: {
    HelloCesium,
  },
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapState({}),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
  created() {
    this.$store.dispatch("aCsInit").then(() => {
      //this.$store.dispatch("aLoad1stDataSet");
    });
  },
  mounted: function() {},
};
</script>
