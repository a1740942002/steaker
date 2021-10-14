<template>
  <header
    class="
      bg-dark
      min-h-[73px]
      w-full
      sticky
      top-0
      z-10
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
    <div class="border-white rounded-[2px]">
      <select class="bg-dark" :value="lang" @change="handleSelect">
        <option selected value="en-us">EN</option>
        <option value="zh-tw">繁體</option>
      </select>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const { locale } = useI18n();
    const lang = computed(() => {
      return store.state.lang;
    });
    const handleSelect = (e) => {
      router.push(`/${e.target.value}`);
    };

    return { locale, lang, handleSelect };
  },
};
</script>

