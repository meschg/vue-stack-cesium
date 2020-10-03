import { GetterTree, MutationTree, ActionTree } from "vuex";
import Cesium from "../plugins/cesium";

var csViewer = null;

class State {
  cesiumSettings = {
    fpsTarget: 60,
  };
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
      imageryProviderViewModels: imageryViewModels, // added your Cesium Ion Token (main.ts) and remove this to get access to all layers
    };
    csViewer = new Cesium.Viewer("cesiumContainer", viewerData);
    csViewer.scene.debugShowFramesPerSecond = true;
    console.log("mCsInit");
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
};

const getters = <GetterTree<State, any>>{};

const cesiumStore = {
  namespaced: false,
  modules: {},
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default cesiumStore;
