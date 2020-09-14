import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/index.css";
Vue.config.productionTip = false;

Vue.filter('formatPrice', function (value) {
  return "Rp." + (value/1000).toFixed(3);
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
