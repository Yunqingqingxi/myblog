import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import Element from 'element-plus'
import './css/top_bar.css'
import './css/under_line.css'

const app = createApp(App);
app.use(router)
app.use(Element)
app.mount('#app')
