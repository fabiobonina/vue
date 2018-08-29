import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Registro from '@/pages/Registro'
import Home from '@/pages/Home'
import store from '@/store/store'
import Config from '@/pages/Config'
import SegList from '@/components/config/bem/segmento/SegList'
import GrupoList from '@/components/config/bem/grupo/GrupoList'
import OrdemList from '@/components/config/bem/ordem/OrdemList'
import FabList from '@/components/config/bem/fabricante/FabList'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', name: 'Login', component: Login },
        { path: '/registro', name: 'Registro', component: Registro },
        {
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => {
                console.log(store.state.auth)
                if (!store.state.use) {
                    next('/login')
                } else {
                    next()
                }
            }
        },
        {
            path: '/config',
            component: Config,
            children: [{
                path: '',
                components: {
                    default: SegList,
                    ordem: OrdemList,
                    grupo: GrupoList,
                    fab: FabList
                },
                name: 'Configuração'
            }, ]
        },

    ]
})