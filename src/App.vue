<template>
  <n-notification-provider>
    <Header />
    <main class="max-w-[1280px] mx-auto relative overflow-y-auto">
      <router-view />
    </main>
    <Footer />
  </n-notification-provider>
</template>

<script>
import { NNotificationProvider } from "naive-ui";
export default {
  components: {
    NNotificationProvider,
  },
  created() {
    // 初始化 i18n 在 vuex 中
    this.$store.dispatch("initI18n", this.$i18n);
  },
};
</script>

<style>
/* 消除 scrollbar */
::-webkit-scrollbar {
  display: none;
}

/* loading bar 的 CSS */
#nprogress .bar {
  background: #ea3943 !important;
}
#nprogress .spinner-icon {
  display: none;
  border-top-color: #ea3943 !important;
  border-left-color: #ea3943 !important;
}

/* 通知的 CSS */
.n-notification {
  background-color: #171924 !important;
}
.n-notification-main__content {
  color: #fff !important;
}

.n-base-icon.n-base-close svg {
  color: #fff;
}
</style>
