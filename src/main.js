import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/optimus.css";
import "./assets/css/optimus-website.css";
import ScrollAnimation from "./directives/scrollAnimation";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Dialog from "primevue/dialog";

createApp(App)
  .directive("scrollAnimation", ScrollAnimation)
  .use(AOS)
  .use(store)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component("InputText", InputText)
  .component("Sidebar", Sidebar)
  .component("Divider", Divider)
  .component("Dialog", Dialog)
  .component("Checkbox ", Checkbox)
  .mount("#app");
