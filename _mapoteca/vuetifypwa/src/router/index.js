import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/pages/Login'
import Registro from '@/pages/Registro'
import Home from '@/pages/Home'
import Carregar from '@/pages/Carregar'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/registro', name: 'Registro', component: Registro },
    { path: '/', name: 'Home', component: Home,
        beforeEnter: (to, from, next) => {
        if(!firebase.auth().currentUser){
          next('/login')
        }else{
          next()
        }
      }
    },
    { path: '/carregar', name: 'Carregar', component: Carregar,
        beforeEnter: (to, from, next) => {
        if(!firebase.auth().currentUser){
          next('/login')
        }else{
          next()
        }
      }
    }
  ]
})
