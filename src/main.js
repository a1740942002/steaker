import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './languages/i18n';
import './tailwind.css';
import 'nprogress/nprogress.css';

const app = createApp(App).use(store).use(router).use(i18n);
app.mount('#app');
