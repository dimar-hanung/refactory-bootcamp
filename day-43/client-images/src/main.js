import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/index.css';
import 'vuetify/dist/vuetify.min.css';
import vuetify from '@/plugins/vuetify'
Vue.config.productionTip = false;
Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
