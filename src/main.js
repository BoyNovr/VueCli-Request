import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header_footer/Header.vue';
import Footer from './components/header_footer/Footer.vue';
import loader from './components/utlis/loader.vue';
import Toaster from '@meforma/vue-toaster';

const app=createApp(App);
app.component('app-header',Header);
app.component('app-footer',Footer);
app.component('app-loader',loader);
app.use(Toaster);
app.mount('#app')
