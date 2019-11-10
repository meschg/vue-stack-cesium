import Vue from 'vue'
import Vuex from 'vuex'

import { Cesium, Viewer as CsViewer } from 'cesium/Cesium'
import widget from 'cesium/Widgets/widgets.css'

Vue.use(Vuex)

var csViewer = null;

export default new Vuex.Store({
  state: {
    cesiumSettings: {
      fpsTarget: 60
    },
    dataSets: [],
    name1: "Vue-Stack-Cesium Demo"

  },

  mutations: {
    mCsInit(state) {
      let viewerData = {
        targetFrameRate: state.cesiumSettings.fpsTarget,
        fullscreenButton: false,
        creditContainer: "creditDiv"
      };
      csViewer = new CsViewer('cesiumContainer', viewerData);
    },

    mSetData(state, dataload) {
      state.dataSets[dataload.dataSetIndex] = dataload.data;
    }
  },

  actions: {
    aCsInit({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('mCsInit')
          resolve()
        }, 10)
      })
    },

    aLoad1stDataSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let payload = { dataSetIndex: 1, data: 42 }
          commit('mSetData', payload)
          resolve()
        }, 10)
      })
    },

    aLoad2ndDataSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let dataload = { dataSetIndex: 2, data: "Towel" }
          commit('mSetData', dataload)
          resolve()
        }, 10)
      })
    },
  },
  modules: {
  }
})
