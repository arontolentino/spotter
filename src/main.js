import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";

import "@/firebase/index.js";

import { Plugins, StatusBarStyle } from "@capacitor/core";
const { SplashScreen, StatusBar, Network } = Plugins;

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Ionic);
Vue.config.productionTip = false;

// Initialize Capacitor
initCapacitor();

new Vue({
  router,
  store,
  render: h => h(App),
  async mounted() {
    SplashScreen.hide();
  }
}).$mount("#app");

async function initCapacitor() {
  // Set status-bar background and style
  StatusBar.setStyle({ style: StatusBarStyle.Dark });
  StatusBar.show();
}
