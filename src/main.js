import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "buefy/dist/buefy.css";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowCircleRight, faChevronDown);

Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
