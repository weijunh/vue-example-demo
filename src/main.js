import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import { Button } from 'element-ui';

import router from './router'
//阻止启动生产消息
Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(Button)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
