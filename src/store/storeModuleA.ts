import { GetterTree, MutationTree, ActionTree } from "vuex";

class State {
  userId: string | null = null;
  valueA: string = "valueA";
  numberA: number = 10;
}

const mutations = <MutationTree<State>>{
  mUpdateModuleA: (state: any, payload: { a: string; n: number }) => {
    console.log("countRootStore: " + state.count);
    state.valueA += payload.a;
    state.numberA += payload.n;
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
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default moduleA;
