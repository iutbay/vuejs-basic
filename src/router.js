import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from './components/Default.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Default }
    ]
});
