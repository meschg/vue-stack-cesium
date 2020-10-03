import store from "./store";

export default {
  state: {
    countB: 0,
    lastPayload: {},
  },

  mutations: {
    mIncB(state: any) {
      state.countB++;
      console.log("mCsInit");
    },

    mConsoleLogPayload(state: any, payload: any) {
      state.lastPayload = payload;
      console.log("mSetData", payload);
    },
  },

  actions: {
    aIncB({ commit }) {
      commit("mIncB");
      console.log("aIncB");
    },

    aConsoleLogPayload({ commit }, payload: any) {
      commit("mConsoleLogPayload", payload);
      console.log("aConsoleLogPayload");
    },
  },

  getters: {},
};
