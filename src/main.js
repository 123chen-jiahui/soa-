import Vue from 'vue'
import router from './router.js';
import App from './App.vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
require('./mock')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
