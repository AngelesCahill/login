import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
  },
  getters: {
    enviandoUsuario(state){
      return state.user;
    },
  },
  mutations: {
    mutandoUsuario(state, datoUser){
      state.user = datoUser;
    },
  },
  actions: {
    user({commit}, datoUser){
      commit('mutandoUsuario', datoUser);
    }
  },
  
})
