<template>
  <div>
    <v-app-bar app color="primary">
      <v-btn class="mx-2" route to="/">
        <v-img class="mr-2" src="/logo-vue.png" width="30" />
        Vue {{ dep.vue }}</v-btn
      >
      <v-btn class="mx-2" route to="/compositionAPI">
        <v-img class="mr-2" src="/logo-vue.png" width="30" />
        Vue 3 Composition API</v-btn
      >

      <v-btn class="mx-2" @click="routerActions">
        <v-img class="mr-2" src="/logo-vue.png" width="30" />Router Dynamic
        Props</v-btn
      >

      <v-btn class="mx-2" route to="/vuetify">
        <v-img class="mr-2" src="/logo-vuetify.svg" width="25" />Vuetify
        {{ dep.vuetify }}</v-btn
      >
      <v-btn class="mx-2" route to="/typescript">
        <v-img
          class="mr-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
          width="25"
        />
        Typescript {{ dep.typescript }}</v-btn
      >
      <v-btn class="mx-2" route to="/cesium">
        <v-img
          class="mr-2"
          src="data:image/png;base64,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"
          width="27"
        />
        Cesium {{ dep.cesium }}</v-btn
      >

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/meschg/vue-stack-cesium"
        class="success mr-2"
        target="_blank"
      >
        <span class="mr-2">This code example on Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import router from "@/router/router";

export default defineComponent({
  name: "AppBar",
  components: {},
  props: {
    msg: String,
  },
  data: () => ({
    dynamicProp: "router-prop-1",
    dep: {
      "@mdi/font": "6.7.96",
      cesium: "1.95.0",
      "roboto-fontface": "*",
      vue: "3.2.37",
      "vue-router": "4.0.16",
      "vue3-shortkey": "4.0.0",
      vuetify: "3.0.0-beta.5",
      vuex: "4.0.2",
      webfontloader: "1.0.0",
      typescript: "4.7.4",
    },
  }),
  computed: { ...mapState(["count"]) },
  methods: {
    routerActions: function () {
      // routes do string only
      let propConst = "router-prop-2";
      router.push({
        name: "DynamiceRouteView",
        params: { routerProp: this.dynamicProp, routerProp2: propConst },
      });
    },
    ...mapMutations(["incrementStore"]),
  },
});
</script>
