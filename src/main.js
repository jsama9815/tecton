import './assets/styles/fonts.css'
import i18n from './plugins/i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
