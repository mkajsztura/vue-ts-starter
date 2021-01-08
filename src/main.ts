import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/root-store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { applyPolyfills, defineCustomElements } from 'stencil-starter/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  'my-component',
]

applyPolyfills().then(() => {
  defineCustomElements();
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
