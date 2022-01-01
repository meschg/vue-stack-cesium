import { createStore, Store } from "vuex";
import { GetterTree, MutationTree, ActionTree } from "vuex";

import moduleB from "@/store/modules/storeModuleB";
import moduleA from "@/store/modules/storeModuleA";
import cesiumStore from "@/store/modules/storeCesium";

class State {
  // get a typesafe store.state in each module
  cesium!: typeof cesiumStore.state;
  moduleA!: typeof moduleA.state;
  moduleB!: typeof moduleB.state;

  storeCounter: number = 0;
  storeTestVar: string = "store-test-1";
  dataSets = [];
}

const actions = <ActionTree<State, any>>{
  aLoad1stDataSet({ commit }) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let payload = { dataSetIndex: 1, data: 42 };
        console.log("aLoad1stDataSet");
        commit("mSetData", payload);
        resolve();
      }, 10);
    });
  },

  aLoad2ndDataSet({ commit }) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let dataload = { dataSetIndex: 2, data: "Towel" };
        console.log("aLoad2ndDataSet");
        commit("mSetData", dataload);
        resolve();
      }, 10);
    });
  },
};

const mutations = <MutationTree<State>>{
  mSetData(state, dataload) {
    state.dataSets = dataload;
    console.log("mSetData: " + state.dataSets);
  },

  incrementStore(state) {
    console.log(
      "count-root-store: " +
        state.storeCounter +
        " moduleB-count: " +
        moduleB.state.countB
    );
    state.storeCounter++;
  },
};

const getters = <GetterTree<State, any>>{};

export interface RootState {
  // not sure if this is the right thing still to do...
  state: State;
  cesium: typeof cesiumStore;
  moduleA: typeof moduleA;
  moduleB: typeof moduleB;
}

export default createStore<State>({
  modules: {
    // sync names in root store get a typesafe store.state for each module
    cesium: cesiumStore,
    moduleA,
    moduleB,
  },
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters,
});

declare module "@vue/runtime-core" {
  // declare your own store states
  interface store {
    state: State;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
