import Vue from "vue";
import Vuex from "vuex";
import { GetterTree, MutationTree, ActionTree } from "vuex";
import Cesium from "../plugins/cesium";

import moduleA from "@/store/storeModuleA";
import moduleB from "@/store/storeModuleB";

Vue.use(Vuex);

var csViewer = null;

class State {
  cesiumSettings = {
    fpsTarget: 60,
  };
  dataSets = [];
  name1: string = "Vue-Stack-Cesium Demo";
  count: number = 0;
}

const mutations = <MutationTree<State>>{
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
    console.log(
      "count-root: " + state.count + "countB: " + moduleB.state.countB
    );
    state.count++;
  },
};

const actions = <ActionTree<State, any>>{
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
};

const getters = <GetterTree<State, any>>{};

export default new Vuex.Store({
  modules: { moduleA, moduleB },
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
});
