import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

export default ({ mode }) => {
  const __DEV__ = mode === 'development';

  const alias = {
    '@': path.resolve(__dirname, '/src'),
  };

  if (__DEV__) {
    // 解决警告You are running the esm-bundler build of vue-i18n.
    alias['vue-i18n'] = 'vue-i18n/dist/vue-i18n.cjs.js';
  }

  return defineConfig({
    plugins: [
      Vue(),
      Components({
        /* options */
      }),
    ],
    resolve: {
      alias,
    },
  });
};
