import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import Element from 'element-plus'
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-persistedstate-plugin";
import "./css/login_form.css"
import "./css/serach_input.css"
import "./css/home_container.css"
import '../node_modules/element-plus/theme-chalk/index.css'

const app = createApp(App);
const pinia = createPinia()
const persistedState = createPersistedState();
pinia.use(persistedState)


app.use(pinia)
app.use(router)
app.use(Element)
app.mount('#app')
