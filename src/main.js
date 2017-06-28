import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router/routerConfig.js'
import axios from 'axios'
import stores from './store/store'
import Loading from './components/Loading'
import Bgbody from './components/bgbody'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL='http://localhost:8091/';
Vue.prototype.$http = axios
Vue.use(VueRouter);
Vue.use(Loading);
Vue.use(Bgbody);
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});
const router = new VueRouter(routerConfig)
require('./assets/css/base.css')
require('./assets/css/index.css')

new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
