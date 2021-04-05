import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElementPlus from '@/plugins/element'
import axios from 'axios'
const http = axios.create({
  baseURL: `http://localhost:3000`,
})

const app = createApp(App)
installElementPlus(app)

app.config.globalProperties.$http = http

app
  .use(store)
  .use(router)
  .mount('#app')
