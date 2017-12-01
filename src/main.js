import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Default from './components/Default.vue';

/*
 * Init Vuex
 */
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
    }
});

/*
 * Init VueRouter
 */
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Default }
    ]
});

/*
 * Init Vue
 */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
