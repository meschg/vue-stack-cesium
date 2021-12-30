import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router/router";
import store from "./store/store";

//@ts-ignore
import vueshortkey from "vue3-shortkey";

loadFonts();

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(vueshortkey, { prevent: ["input", "textarea"] })
  .mount("#app");
