import Vue from 'vue'
import Vuex from 'vuex'
import Cesium from '../plugins/cesium'

Vue.use(Vuex)

var csViewer = null;

interface CounterState {
  count: number
}


export default new Vuex.Store({
  state: {
    cesiumSettings: {
      fpsTarget: 60
    },
    dataSets: [],
    name1: "Vue-Stack-Cesium Demo",
    count: 0

  },

  mutations: {
    mCsInit(state) {
      let viewerData = {
        targetFrameRate: state.cesiumSettings.fpsTarget,
        fullscreenButton: false,
        // additional viewer settings
      };
      csViewer = new Cesium.Viewer('cesiumContainer', viewerData);
      console.log("mCsInit")
    },

    mSetData(state, dataload) {
      console.log("mSetData")
      //state.dataSets[dataload.dataSetIndex] = dataload.data;
    },

    increment(state) {
      state.count++
    }
  },

  actions: {
    aCsInit({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("aCsInit")
          commit('mCsInit')
          resolve()
        }, 10)
      })
    },

    aLoad1stDataSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let payload = { dataSetIndex: 1, data: 42 }
          console.log("aLoad1stDataSet")
          commit('mSetData', payload)
          resolve()
        }, 10)
      })
    },

    aLoad2ndDataSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let dataload = { dataSetIndex: 2, data: "Towel" }
          console.log("aLoad2ndDataSet")
          commit('mSetData', dataload)
          resolve()
        }, 10)
      })
    },


  },
  modules: {
  }
})
