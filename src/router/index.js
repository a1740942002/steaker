import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/zh-tw',
    name: 'Home_zh-tw',
    component: Home,
    beforeEnter: (to, from) => {
      localStorage.setItem('lang', 'zh-tw');
      store.dispatch('handleLang', 'zh-tw');
      const { i18n } = store.state;
      i18n.locale = 'zh-tw';
      return true;
    },
  },
  {
    path: '/en-us',
    name: 'Home_en-us',
    component: Home,
    beforeEnter: (to, from) => {
      localStorage.setItem('lang', 'en-us');
      store.dispatch('handleLang', 'en-us');
      const { i18n } = store.state;
      i18n.locale = 'en-us';
      return true;
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
