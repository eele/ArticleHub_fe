import Vue from 'vue'
import App from './components/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
