import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueNumberFormat from "vue-number-format";

createApp(App)
  .use(router)
  .use(VueNumberFormat, { decimal: ",", thousand: "," })
  .mount("#app");
