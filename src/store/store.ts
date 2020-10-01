import Vue from "vue";
import Vuex from "vuex";
import Cesium from "../plugins/cesium";
import { EllipsoidTerrainProvider } from "cesium";

Vue.use(Vuex);

var csViewer = null;

export default new Vuex.Store({
  state: {
    cesiumSettings: {
      fpsTarget: 60,
    },
    dataSets: [],
    name1: "Vue-Stack-Cesium Demo",
    count: 0,
  },

  mutations: {
    mCsInit(state) {
      let imageryViewModels: any = [];
      imageryViewModels.push(
        new Cesium.ProviderViewModel({
          name: "Natural Earth\u00a0II",
          iconUrl: Cesium.buildModuleUrl(
            "Widgets/Images/ImageryProviders/naturalEarthII.png"
          ),
          tooltip:
            "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
          creationFunction: function() {
            return new Cesium.TileMapServiceImageryProvider({
              url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
            });
          },
        })
      );

      let viewerData = {
        targetFrameRate: state.cesiumSettings.fpsTarget,
        fullscreenButton: false,
        imageryProviderViewModels: imageryViewModels, // remove if you added you Cesium Ion Token to get all layer access
      };
      csViewer = new Cesium.Viewer("cesiumContainer", viewerData);
      csViewer.scene.debugShowFramesPerSecond = true;
      console.log("mCsInit");
    },

    mSetData(state, dataload) {
      console.log("mSetData");
      //state.dataSets[dataload.dataSetIndex] = dataload.data;
    },

    increment(state) {
      state.count++;
    },
  },

  actions: {
    aCsInit({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("aCsInit");
          commit("mCsInit");
          resolve();
        }, 10);
      });
    },

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
  },
  modules: {},
});
