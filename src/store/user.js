// src/stores/user.js

import { defineStore } from 'pinia';
import { useTokenStore } from './token';
import { getUserData } from '../api/user';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        token: '',
        user: null,
        isAuthenticated: false
    }),
    getters: {
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    actions: {
        setToken(newToken) {
            this.token = newToken;
            this.isAuthenticated = !!newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
            } else {
                localStorage.removeItem('token');
            }
        },
        clearToken() {
            this.token = '';
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem('token');
        },
        async fetchUser() {
            if (this.token) {
                try {
                    const userData = await getUserData(); // 使用api/user.js中的方法获取用户数据
                    this.user = userData;
                } catch (error) {
                    console.error('Failed to fetch user', error);
                    this.clearToken();
                }
            }
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user',
                storage: localStorage,
                paths: ['token', 'isAuthenticated', 'user']
            }
        ]
    }
});
