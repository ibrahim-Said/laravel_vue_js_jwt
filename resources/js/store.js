import { getLocalUser } from "./auth";

const courentUser = getLocalUser();
export default {
    state: {
        user: courentUser,
        isLogged: false,
        loading: false,
        errors: null,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getErrors(state) {
            return state.errors;
        },
        getIsLogged(state) {
            return state.isLogged;
        },
        getLoading(state) {
            return state.loading;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.errors = null;
        },
        loginSuccess(state, payload) {
            state.loading = false;
            state.isLogged = true;
            state.user = Object.assign({}, payload.user, { token: payload.access_token });
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        loginFailed(state, payload) {
            state.isLogged = false;
            state.errors = payload;
            state.loading = false;
            state.user = null;
        },
        registerSuccess(state, payload) {
            state.errors = null
        },
        registerFailed(state, payload) {

            state.errors = payload;

        }
    },
    actions: {
        login(context) {
            context.commit('login');
        }
    }
}