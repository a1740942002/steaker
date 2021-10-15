import { createI18n } from 'vue-i18n';
import enUS from '@/languages/en-us.json';
import zhTW from '@/languages/zh-tw.json';

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'zh-TW': zhTW,
    'en-US': enUS,
  },
});

export default i18n;
