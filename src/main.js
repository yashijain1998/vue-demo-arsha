import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'

Vue.use(Vuelidate)

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
// import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
