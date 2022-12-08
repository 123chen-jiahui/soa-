import Vue from 'vue'
import router from './router.js';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false
require('./mock')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
