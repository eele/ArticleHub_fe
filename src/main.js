import Vue from 'vue'
import App from './components/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'
import VueRouter from "vue-router";

import Writings from "./components/writings/writings.vue";
import Home from "./components/home/home.vue";

Vue.use(VueRouter);
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/writings',
      component: Writings
    },
    {
      path: '/',
      component: Home
    }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
