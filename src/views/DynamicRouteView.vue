<template>
  <div>
    <v-container>
      <v-card class="pa-3">
        <h1>Router Dynamic Props example</h1>
        <div>routerProp: {{ routerProp }}</div>
        <div>routerProp2: {{ routerProp2 }}</div>

        <h3>State Count: {{ storeCounter }}</h3>
        <v-btn @click="incrementStore" color="purple" dark>+1 vuex</v-btn>
      </v-card>
    </v-container>
    <HelloClassStyle msg1="Hello Class Style" msg2="2nd message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import router from "@/router/router";

// import other components

export default defineComponent({
  name: "DynamicRouteView",
  components: {},
  // We declare the props separately to make props types inferable.
  props: {
    routerProp: String,
    routerProp2: String,
  },
  data: () => ({
    msg: 123565343,
  }),
  computed: {
    ...mapState(["storeCounter"]),
  },
  methods: {
    // store commit dispatch example
    storeActions: function () {
      //this.$store.dispatch('dispatchMuatation')
      //this.$store.commit('commitMutation')
      console.log("Store-action called.");
    },
    routerActions: function () {
      //router.push("classStyle") // -> /user/123
      console.log("Router called.");
    },
    ...mapMutations(["incrementStore"]),
  },
});
</script>
