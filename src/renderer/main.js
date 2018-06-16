import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import element from 'element-ui'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(element)
import 'element-ui/lib/theme-chalk/index.css';

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
