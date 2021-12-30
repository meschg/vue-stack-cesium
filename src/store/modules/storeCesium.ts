import store from "@/store/store";
import { GetterTree, MutationTree, ActionTree } from "vuex";

import * as Cesium from "cesium";

var csViewer!: Cesium.Viewer;

class State {
  cesiumSettings = {
    fpsTarget: 60,
  };
}

const actions = <ActionTree<State, any>>{
  //@ts-ignore
  aCsInit({ commit }) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("store.aCsInit() called");
        commit("mCsInit");
        console.log("store.aCsInit() done");
        resolve();
      }, 10);
    });
  },
};

const mutations = <MutationTree<State>>{
  mCsInit(state: any) {
    console.log("store.mCsInit called");
    const imageryViewModels: any = [];
    imageryViewModels.push(
      new Cesium.ProviderViewModel({
        name: "Natural Earth\u00a0II",
        iconUrl: Cesium.buildModuleUrl(
          "Widgets/Images/ImageryProviders/naturalEarthII.png"
        ),
        tooltip:
          "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
        creationFunction: function () {
          return new Cesium.TileMapServiceImageryProvider({
            url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
          });
        },
      })
    );

    const viewerData = {
      targetFrameRate: state.cesiumSettings.fpsTarget,
      fullscreenButton: false,
      imageryProviderViewModels: imageryViewModels, // added your Cesium Ion Token (main.ts) and remove this to get access to all layers
    };
    csViewer = new Cesium.Viewer("cesiumContainer", viewerData);
    csViewer.scene.debugShowFramesPerSecond = true;
    console.log("store.mCsInit done");
  },
};

const getters = <GetterTree<State, any>>{};

const cesiumStore = {
  namespaced: false,
  modules: {},
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters,
};

export default cesiumStore;
