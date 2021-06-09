import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth'
import user from '../store/user'
import archive from '../store/archive'
import privileged from '../store/privileged';
import others from "./others/drawerControl";
import post from "../store/post"

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    user,
    archive,
    others,
    privileged,
    post,
  }
})

// store.dispatch('auth/autoLogin');

export default store;
