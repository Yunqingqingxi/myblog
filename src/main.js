import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/Home.js";
import Element from 'element-plus'

const app = createApp(App);
app.use(router)
app.use(Element)
app.mount('#app')
