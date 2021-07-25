import Vue from 'vue'
import App from './App'
import store from '@/store';
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
import './styles/index.scss'
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

import CustomTabbar from '@/components/tabbar/tabbar.vue';
Vue.component('CustomTabbar', CustomTabbar)

App.mpType = 'app'

const app = new Vue({
	store,
	...App

})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

export async function get (url = '', data = {}){
	return await app.$u.get(url,data)
}
export async function post (url = '', data = {}){
	return await app.$u.post(url,data)
}

// // http接口API集中管理引入部分
// import httpApi from '@/common/http.api.js'
// Vue.use(httpApi, app)

app.$mount()

