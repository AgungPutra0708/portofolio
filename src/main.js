// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/css/style.css'
// import './assets/js/main.js'

const app = createApp(App)

//use vue router
app.use(router)
app.use(AOS)

app.mount('#app')
