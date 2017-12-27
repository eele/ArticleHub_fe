import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  loginDialogShow: false,
  userActiveTab: 'articles'
}

const mutations = {
  switchLoginDialog(state) {
    if (state.loginDialogShow == true) {
      state.loginDialogShow = false;
    } else {
      state.loginDialogShow = true;
    }
  }
}

const getters = {
  getLoginDialogState(state) {
    return state.loginDialogShow;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
