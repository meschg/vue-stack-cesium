import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var csViewer = null;

export default new Vuex.Store({
  state: {
    dataSet1: null,
    dataSet2: null,
    name1: "Vue-Stack-Cesium Demo"

  },

  mutations: {
    mCsInit(state) {
      let viewerData = { //eslint-disable-line
        scene3DOnly: true,
        selectionIndicator: false,
        baseLayerPicker: false,
        infoBox: false,
        geocoder: false,
        timeline: false,
        animation: false,
        targetFrameRate: state.settings.gfx.fpsTarget,
        navigationHelpButton: false,
        fullscreenButton: false,
        shadows: true,
        homeButton: false,
        creditContainer: "creditDiv",
        imageryProvider: new createTileMapServiceImageryProvider({
          url: new buildModuleUrl('Assets/Textures/NaturalEarthII')
        }),
      };
      csViewer = CsViewer('cesiumContainer', viewerData);
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
          // do stuff and call mutation
          resolve()
        }, 10)
      })
    },

    aLoad2ndDataSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // do more stuff and call mutation
          resolve()
        }, 10)
      })
    },

  },
  modules: {
  }
})
