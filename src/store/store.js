import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
var $ = require('jquery');
window.$ = $;

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:8080/ArticleHub';

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
  },
  resetSessionUid() {
    axios.delete('/ArticleHub/session/user/uid/uid')
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
  }
}

const getters = {
  getLoginDialogState(state) {
    return state.loginDialogShow;
  },
  getSessionUid() {
    var uid = null;
    $.ajax({
      type: "get",
      url: '/ArticleHub/session/user/uid/uid',
      async: false,
      dataType: "json",
      success: function(data) {
        uid = data.data;
      }
    });
    return uid;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
