import { GetterTree, MutationTree, ActionTree } from "vuex";
import store from "./store";

class State {
  userId: string | null = null;
  valueA: string = "valueA";
  numberA: number = 10;
}

const mutations = <MutationTree<State>>{
  mUpdateModuleA: (state, payload: { a: string; n: number }) => {
    state.valueA += payload.a;
    state.numberA += payload.n;
    console.log(
      "numberA: " + state.numberA + "|| countRootStore: " + store.state.count
    );
  },
};

const actions = <ActionTree<State, any>>{
  aUpdateModuleA({ commit }, payload: { a: string; n: number }) {
    commit("mUpdateModuleA", payload);
  },
};

const getters = <GetterTree<State, any>>{
  gValueA: (state: any) => {
    return state.valueA;
  },
};

const moduleA = {
  namespaced: false,
  modules: {},
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default moduleA;
