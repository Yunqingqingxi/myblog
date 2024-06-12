import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import Element from 'element-plus'
import "./assets/css/serach_input.css"
import '../node_modules/element-plus/theme-chalk/index.css'
import './assets/css/global.css'
import pinia from '@/store/index.js'

const app = createApp(App);

app.use(pinia)
app.use(router)
app.use(Element)
app.mount('#app')
