import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import {
  Navbar,
  Button,
  Carousel,
  Input,
  Field,
  Modal,
  Table,
  Steps,
  ConfigProgrammatic,
} from "buefy";
//import "buefy/dist/buefy.css";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleRight,
  faChevronDown,
  faAngleLeft,
  faAngleRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

library.add(
  faArrowCircleRight,
  faChevronDown,
  faAngleLeft,
  faAngleRight,
  faArrowUp
);

Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(VueFullPage);
Vue.use(Navbar);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Input);
Vue.use(Field);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Steps);
Vue.config.productionTip = false;
ConfigProgrammatic.setOptions({
  defaultIconPack: "fas",
  defaultIconComponent: "vue-fontawesome",
});

Vue.prototype.$axios = axios;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
