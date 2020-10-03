import { ref, reactive, computed } from "@vue/composition-api";
import { mapState, mapMutations } from "vuex";
import store from "@/store/store";

export default function fileCompositionVuex() {
  computed: mapState(["count"]);

  const vuexRObj: any = reactive({
    count: 0,
  });

  function incrementVuex() {
    store.commit("increment");
    console.log("Fancy vuex store action and count" + store.state.count);
  }

  return { vuexRObj, incrementVuex };
}
