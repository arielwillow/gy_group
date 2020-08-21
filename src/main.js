
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import './directives';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VAR from './VAR';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.prototype.VAR = VAR;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  const p = to.fullPath;
  if (to.path) {
    if (window.hmt0) {
      window.hmt0.push(['_trackPageview', `/#${p}`]);
    }
  }
  next();
});
