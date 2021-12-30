import { GetterTree, MutationTree, ActionTree } from "vuex";
import store from "@/store/store";

class State {
  countB: number = 0;
  lastPayload: any = {};
}

const mutations = <MutationTree<State>>{
  mIncB(state) {
    state.countB++;
    console.log(
      "storeModuleB.mIncB(): " +
        state.countB +
        " || ModuleA.numberA: " +
        store.state.moduleA.numberA
    );
  },

  mConsoleLogPayload(state, payload: any) {
    state.lastPayload = payload;
    console.log("mSetData", payload);
  },
};

const actions = <ActionTree<State, any>>{
  //@ts-ignore
  aIncB({ commit }) {
    commit("mIncB");
    console.log("aIncB");
  },

  //@ts-ignore
  aConsoleLogPayload({ commit }, payload: any) {
    commit("mConsoleLogPayload", payload);
    console.log("aConsoleLogPayload");
  },
};

const getters = <GetterTree<State, any>>{};

const moduleB = {
  namespaced: false,
  modules: {},
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters,
};

export default moduleB;
