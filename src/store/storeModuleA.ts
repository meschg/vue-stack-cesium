import store from "./store";

export const state = () => ({
  valueA: "valueA",
  numberA: 10,
});

export const getters = {
  getterValue: (state: any) => {
    return state.value;
  },
};

export const mutations = {
  mUpdateModuleA: (state: any, payload: { a: string; n: number }) => {
    state.valueA += payload.a;
    state.numberA += payload.n;
  },
};

export const actions = {
  aUpdateModuleA({ commit }, payload: { a: string; n: number }) {
    commit("mUpdateModuleA", payload);
  },
};
