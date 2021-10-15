<template>
  <n-notification-provider>
    <Header />
    <main class="max-w-[1280px] mx-auto relative overflow-y-auto">
      <router-view />
    </main>
    <Footer />
  </n-notification-provider>
  <NBackTop :show="isShowBackTop" bottom="20" right="20" />
</template>

<script>
import { NNotificationProvider, NBackTop } from "naive-ui";
import { useWindowScroll } from "@vueuse/core";

export default {
  components: {
    NNotificationProvider,
    NBackTop,
  },
  created() {
    // 初始化 i18n 在 vuex 中
    this.$store.dispatch("initI18n", this.$i18n);
    // 取得滾軸位置
    const { x, y } = useWindowScroll();
    this.x = x;
    this.y = y;
  },
  data() {
    return {
      x: null,
      y: null,
    };
  },
  computed: {
    isShowBackTop() {
      return this.y > 100;
    },
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
  background: #ff3233 !important;
}
#nprogress .spinner-icon {
  display: none;
  border-top-color: #ff3233 !important;
  border-left-color: #ff3233 !important;
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

/* 返回最上層 CSS */
.n-back-top {
  background-color: #171924 !important;
}
.n-back-top .n-base-icon {
  color: #fff !important;
}
.n-base-icon:hover {
  color: #ff7d7d !important;
}
.n-base-icon:active {
  color: #ff7d7d !important;
}
</style>
