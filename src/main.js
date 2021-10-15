import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import enUS from '@/languages/en-us.json';
import zhTW from '@/languages/zh-tw.json';
import App from './App.vue';
import store from './store';
import router from './router';
import './tailwind.css';
import 'nprogress/nprogress.css';

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'zh-TW': zhTW,
    'en-US': enUS,
  },
});

const app = createApp(App).use(store).use(router).use(i18n);
app.mount('#app');
