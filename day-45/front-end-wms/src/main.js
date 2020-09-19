import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas}  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('formatPrice', function (value) {
  var formatter = new Intl.NumberFormat('ID', {
    style: 'currency',
    currency: 'IDR',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(value); /* $2,500.00 */
  // return "Rp." + (value/1000).toFixed(3);
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
