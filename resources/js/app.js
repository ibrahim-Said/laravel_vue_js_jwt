require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import App from './components/App.vue';
import StoreData from './store'
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
    routes,
    mode: 'history'
});
const store = new Vuex.Store(StoreData);
router.beforeEach((to, from, next) => {
    const requiredAuth = to.matched.some(record => { record.meta.requiredAuth });
    const user = store.state.user;
    if (requiredAuth && !user) {
        next('/login');
    } else if (to.path == '/login' && user) {
        next('/');
    } else {
        next();
    }
});
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    }
});