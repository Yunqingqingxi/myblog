import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import Element from 'element-plus'
import "./css/login_form.css"
import "./css/serach_input.css"
import "./css/home_container.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../node_modules/element-plus/theme-chalk/index.css'
import axios from "../src/api/request";
import store from './store'

//默认参数设置
axios.defaults.baseURL = 'http://localhost:8080/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.use(Element)
app.mount('#app')
