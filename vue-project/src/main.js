// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import global from './globalData.vue'
import iView from '../node_modules/iview';
import 'iview/dist/styles/iview.css';
Vue.prototype.COMMON = global;
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


