import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Lara from './presets/lara'; 
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

//Prime-vue components
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'

const app = createApp(App)

app.component('Panel', Panel)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Checkbox', Checkbox)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara  
});
app.use(pinia)
app.use(router)
app.mount('#app')

