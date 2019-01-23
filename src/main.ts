import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElementUi from 'element-ui'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
(window as any).hljs = hljs
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/index.scss'
import { format } from './filter/index'

Vue.use(ElementUi)
Vue.use(VueSimplemde)
Vue.filter('format', format)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default app
