import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import TreeView from "vue-json-tree-view"
import VueSweetalert2 from 'vue-sweetalert2'
import Vuex from 'vuex'
import store from './store'
import apiUrl from './config'

Vue.use(Vuex)
Vue.use(TreeView)
Vue.use(VueSweetalert2)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apiUrl,
  render: h => h(App)
}).$mount('#app')
