import { createApp } from 'vue'
import './style.css' // Default Vite styles
import App from './App.vue'
import router from './router' // Import the router

const app = createApp(App)
app.use(router) // Use the router
app.mount('#app')
