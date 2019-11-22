import Vue from 'vue';
import Vuex from 'vuex';

import ticketModules from './tickets';
import cartModules from './cart';

Vue.use(Vuex);

let store = new Vuex.Store({
  strict: true, //嚴格模式
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    ticketModules,
    cartModules,
  },
})
export default store;
