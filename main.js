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
app.$mount()
