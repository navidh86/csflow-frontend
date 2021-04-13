import Vue from 'vue'
import VueRouter from 'vue-router'


import store from "../store"

Vue.use(VueRouter)

const routes = [
    {
        path: '/search/relevant',
        name: 'Relevant',
        component: () => import('../views/search/Relevant.vue')
    },

    {
        path: '/user/:id',
        name: 'User',
        component: () => import('../views/user/User')
    },
    {
        path: '/auth/signIn',
        name: 'SignIn',
        component: () => import('../views/auth/SignIn')
    },
    {
        path: '/auth/signUp',
        name: 'SignUp',
        component: () => import('../views/auth/SignUp')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path:'/box',
        name:'Box',
        component: () => import('../components/Box/postBox')
    }
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    if(!store.getters['auth/getIsSignedIn'] && to.name!='SignIn' && to.name!='SignUp' && to.name!='Box'){
        next('/auth/signIn');
    }
    if(store.getters['auth/getIsSignedIn'] && to.name=='SignIn'){
        next('/search/relevant');
    }

    if(to.name!=from.name){
        next();
    }



})
export default router
