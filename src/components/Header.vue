<template>
  <header
    class="
      bg-dark
      min-h-[73px]
      w-full
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      px-[16px]
      py-[26px]
      border-b-[1px] border-white
    "
  >
    <router-link to="/" class="w-[125px] h-[21px]">
      <img src="../assets/steaker-logo.png" alt="" />
    </router-link>
    <div class="border-white border-[1px] rounded-[2px]">
      <select class="bg-dark" :value="lang" @change="handleSelect">
        <option selected value="en-US">EN</option>
        <option value="zh-TW">繁體</option>
      </select>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const { locale } = useI18n();
    const lang = computed(() => {
      return store.state.lang;
    });
    const handleSelect = (e) => {
      router.push({
        path: `/${e.target.value}`,
        query: route.query,
      });
    };

    return { locale, lang, handleSelect };
  },
};
</script>

