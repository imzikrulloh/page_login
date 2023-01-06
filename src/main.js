import { createApp } from 'vue'
import App from './App.vue'


import './style.css'
import './components/font-awesome.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App)
// app.component('TheNavbar',TheNavbar)
app.mount('#app')
