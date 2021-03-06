/**
 * Also a way to define stores but not sure how to fix make this typescript compatible...
 * TODO: Typescript compatible definition
 */
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
  },

  getters: {},
};
