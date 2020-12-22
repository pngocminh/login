import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { LoaderPlugin } from 'vue-google-login';
import 'bootstrap';
Vue.use(LoaderPlugin, {
  client_id: "383309301336-1bhilrsn84mkbhdtrrli5g612mukmp1j.apps.googleusercontent.com"
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
