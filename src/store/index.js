// src/store/index.js
import { createStore } from 'vuex'

const store = createStore({
    state: {
        isLoggedIn: false,
        username: '',
    },
    mutations: {
        login(state, username) {
            state.isLoggedIn = true;
            state.username = username;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.username = '';
        },
    },
})

export default store
