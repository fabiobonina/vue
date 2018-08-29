import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueFire)

Vue.material.registerTheme('default', {
  primary: 'cyan',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
