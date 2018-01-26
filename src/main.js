import 'es6-promise/auto';
import Vue from 'vue';
import App from './components/App.vue';

import store from './store';
import router from './router';

/*
 * Init Vue
 */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
