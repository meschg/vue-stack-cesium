import { ref, reactive, computed } from "vue";
import { mapState, mapMutations } from "vuex";
import store from "@/store/store";

export default function fileCompositionVuex() {
  const computedStuff: any = reactive({
    blubbValue: computed(() => "BlubbValue"),
  });

  const vuexRObj: any = reactive({
    count: 0,
  });

  function incrementVuex() {
    store.commit("incrementStore");
    console.log(
      "Fancy vuex store action call from CompositionAPI-file" +
        store.state.storeCounter
    );
  }

  return { vuexRObj, incrementVuex, computedStuff };
}
