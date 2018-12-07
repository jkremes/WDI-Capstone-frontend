import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import TreeView from "vue-json-tree-view"
import VueSweetalert2 from 'vue-sweetalert2'
import Vuex from 'vuex'
import store from './store'
// import apiUrl from './config'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
// import WebFontLoader from 'webfontloader'
// import PhotoUpload from 'vue-photo-upload'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(TreeView)
Vue.use(VueSweetalert2)
Vue.use(VueResource)
Vue.use(Vuetify)
// Vue.use(PhotoUpload)
// Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apiUrl,
  render: h => h(App)
}).$mount('#app')

// App.vue
// import WebFontLoader from 'webfontloader'
 
// export default {
//   mounted () {
//     WebFontLoader.load({
//       google: {
//         families: ['Roboto:100,300,400,500,700,900']
//       },
//       active: this.setFontLoaded
//     })
//   },
//   methods: {
//     setFontLoaded () {
//       this.$emit('font-loaded')
//     }
//   }
// }