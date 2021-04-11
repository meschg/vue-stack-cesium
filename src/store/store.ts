import Vue from "vue";
import Vuex from "vuex";
import { GetterTree, MutationTree, ActionTree } from "vuex";

import moduleA from "@/store/storeModuleA";
import moduleB from "@/store/storeModuleB";
import cesiumStore from "@/store/storeCesium";

Vue.use(Vuex);

class State {
  // get a typesafe store.state in each module
  cesium!: typeof cesiumStore.state;
  moduleA!: typeof moduleA.state;
  moduleB!: typeof moduleB.state;

  dataSets = [];
  count: number = 0;
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

  increment(state) {
    console.log(
      "count-root: " + state.count + " countB: " + moduleB.state.countB
    );
    state.count++;
  },
};

const getters = <GetterTree<State, any>>{};

export interface RootState {
  state: State;
  cesium: typeof cesiumStore;
  moduleA: typeof moduleA;
  moduleB: typeof moduleB;
}

export default new Vuex.Store({
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
