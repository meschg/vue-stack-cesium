import Vue from "vue";
import Vuex from "vuex";
import { GetterTree, MutationTree, ActionTree } from "vuex";

import moduleA from "@/store/storeModuleA";
import moduleB from "@/store/storeModuleB";
import cesiumStore from "@/store/storeCesium";

Vue.use(Vuex);

class State {
  dataSets = [];
  count: number = 0;
}

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

const actions = <ActionTree<State, any>>{
  aLoad1stDataSet({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let payload = { dataSetIndex: 1, data: 42 };
        console.log("aLoad1stDataSet");
        commit("mSetData", payload);
        resolve();
      }, 10);
    });
  },

  aLoad2ndDataSet({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let dataload = { dataSetIndex: 2, data: "Towel" };
        console.log("aLoad2ndDataSet");
        commit("mSetData", dataload);
        resolve();
      }, 10);
    });
  },
};

const getters = <GetterTree<State, any>>{};

export default new Vuex.Store({
  modules: { cesium: cesiumStore, moduleA, moduleB },
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
});
