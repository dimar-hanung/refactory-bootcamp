import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueToast from 'vue-toast-notification';
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';
 
Vue.use(VueToast, {
  // One of the options
  position: 'top-right',
  duration:5000
})
Vue.$toast.open('You did it!');

document.documentElement.setAttribute("class",`theme-${localStorage.getItem("theme")} text-inverse`)
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

Vue.filter('capitalize', function (value) {
  return value.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
