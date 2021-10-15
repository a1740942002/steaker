import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Home },
  {
    path: '/zh-TW',
    name: 'Home_zh-TW',
    component: Home,
    beforeEnter: (to, from) => {
      localStorage.setItem('lang', 'zh-TW');
      store.dispatch('handleLang', 'zh-TW');
      const { i18n } = store.state;
      i18n.locale = 'zh-TW';
      return true;
    },
  },
  {
    path: '/en-US',
    name: 'Home_en-US',
    component: Home,
    beforeEnter: (to, from) => {
      localStorage.setItem('lang', 'en-US');
      store.dispatch('handleLang', 'en-US');
      const { i18n } = store.state;
      i18n.locale = 'en-US';
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
