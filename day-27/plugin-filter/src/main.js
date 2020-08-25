import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/styles/index.css';
import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.config.productionTip = false;

Vue.use(VueToast);
Vue.$toast.success('Profile saved.',{
  position:"top-right",
  duration:10000,
  pauseOnHover:true
  // all of other options may go here
});
//Vue.$toast.open({/* options */});
 
// Force close specific toast
// instance.open();
// Close all opened toast immediately
// Vue.$toast.clear();

Vue.filter('formatPrice', function (value) {
  return "Rp." + (value/1000).toFixed(3);
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
