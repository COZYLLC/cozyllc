import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { Navbar, Button, Carousel, Input } from "buefy";
import "buefy/dist/buefy.css";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

library.add(faArrowCircleRight, faChevronDown);

Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(VueFullPage);
Vue.use(Navbar);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
