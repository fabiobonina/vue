import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyARzHvxkE2OltzCipFR311uemD8dOdnq3U",
            authDomain: "sitema-tercnico.firebaseapp.com",
            databaseURL: "https://sitema-tercnico.firebaseio.com",
            projectId: "sitema-tercnico",
            storageBucket: "sitema-tercnico.appspot.com",
            messagingSenderId: "915897620611"
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        })
        this.$store.dispatch('loadMeetups')
    }
})