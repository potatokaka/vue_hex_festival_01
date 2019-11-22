// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';      //主要的 AJAX 套件
import VueAxios from 'vue-axios';　//將它本身轉為 Vue 的套件，可用this的方法
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import VeeValidate from 'vee-validate'   //匯入檔案
// import { Validator } from 'vee-validate'
// import TW from 'vee-validate/dist/locale/zh_TW'    //匯入語言包
import store from './store'  //加入 store 資料 

import App from './App';
import router from './router';
import './Bus';
import currencyFilter from './filters/currency';

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

Vue.config.productionTip = false
Vue.use(VueAxios, axios);    //用 use 來執行

Vue.use(VeeValidate); //啟用API
// Validator.localize('zh-TW', TW)  //啟用語言包

axios.defaults.withCredentials = true; //存入 cookie session

Vue.component('Loading', Loading); //在這裡啟用，就不用到各元件裡單獨啟用。全站可用的
Vue.filter('currency', currencyFilter); // ('自定義的名稱', import時的名稱 )


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //記得要加入 store
  components: { App },
  template: '<App/>',
})

//避免沒有登入就跑到不該去的頁面
router.beforeEach((to, from, next) => {
  //console.log('to:', to, 'from:', from, 'next:', next);

  if (to.meta.requiresAuth) {
    //console.log('這裡需要驗証');
    const api = `${process.env.APIPATH}/api/user/check`; //驗証的API
      axios.post(api).then((response) => {  //注意這裡因為不是元件本身，所以不能用 this.$http開頭
        console.log(response.data);
        if (response.data.success) {
          next(); //如果登入成功，就會放行
        }　else {
          next({
            path: '/login', //如果沒登入，就會導回登入頁
          })
        }
      });
  } else {
    next(); //直接放行
  }
  
})
