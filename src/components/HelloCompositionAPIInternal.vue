<template>
  <v-container>
    <h1>Hello, CompositionAPI example with INTERNAL setup files</h1>
    <v-card class="ma-4 pa-4">
      <h2>State in Components</h2>
      <h3>State Count: {{ storeCounter }}</h3>
      <v-btn @click="incrementStore" color="purple" dark>+1 vuex</v-btn>
    </v-card>
    <v-card class="ma-4 pa-4">
      <h2>{{ refValue }}</h2>
      <p>
        clickCount is: {{ recObj.clickCount }} || double is:
        {{ recObj.double }} || Items: {{ recObj.itemAmount }}
      </p>
      <v-btn @click="incrementComp" class="primary ma-2"> @click() </v-btn>
      <v-layout class="ml-4" wrap>
        <ul>
          <li v-for="(name, index) in recObj.itemList" :key="index">
            {{ name }}
          </li>
        </ul>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, toRefs } from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  name: "HelloCompositionAPIInternal",
  components: {},
  setup() {
    return useComposition();
  },
  data: () => ({}),
  computed: {
    ...mapState(["storeCounter"]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["incrementStore"]),
  },
  created() {},
  mounted() {},
  unmounted() {},
  destoryed() {},
});

function useComposition() {
  const refValue = ref(42);
  const recObj: any = reactive({
    clickCount: 0,
    itemList: ["cheese", "apple", "Jonny"],
    double: computed(() => recObj.clickCount * 2),
    itemAmount: computed(() => recObj.itemList.length),
  });

  function incrementComp() {
    recObj.clickCount++;
    refValue.value += refValue.value;
    recObj.itemList.push(recObj.clickCount + " + " + refValue.value);
  }

  return {
    recObj,
    incrementComp,
    refValue,
  };
}
</script>

<style scoped></style>
