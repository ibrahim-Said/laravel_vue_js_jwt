import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
export const routes = [{
    path: '/',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}]