import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Importamos los estilos de bootstrap y js para hacer funcional el menu
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
//importamos los estilos que vamos a usar de custom styles
import '@/assets/custom_styles.css'
//Importamos los iconos inslatados con el npm i material-icons
import 'material-icons/iconfont/material-icons.css'

createApp(App).use(store).use(router).mount('#app')
