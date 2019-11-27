import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';

//import Cesium from './plugins/cesium'
//Cesium.Ion.defaultAccessToken = 'YOUR ION TOKEN HERE';

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch("aLoad1stDataSet").then(() => {
      // initial action must return a promise after the data is loaded sucessfully
      this.$store.dispatch("aLoad2ndDataSet");
    });
  },
  mounted() {
    router.push("cesium")
  }
}).$mount('#app')
