import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSessionStorage from 'vue-sessionstorage';
import AlertModal from './plugins/AlertModal';



Vue.config.productionTip = false;
Vue.use(VueSessionStorage);
Vue.use(AlertModal);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
