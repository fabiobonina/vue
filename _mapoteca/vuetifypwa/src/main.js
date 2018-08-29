// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD24SlAbrR1WX0TcV7feCd74EocQjimnP8',
      authDomain: 'meetup-vue.firebaseapp.com',
      databaseURL: 'https://meetup-vue.firebaseio.com',
      projectId: 'meetup-vue',
      storageBucket: 'meetup-vue.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
