<template>
  <header
    class="
      bg-dark
      fixed
      min-h-[73px]
      z-10
      w-full
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
    <div class="h-[34px] w-[71px] border-white rounded-[2px]">
      <select class="bg-dark" :value="lang" @change="handleSelect">
        <option selected value="en-us">EN</option>
        <option value="zh-tw">繁體</option>
      </select>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      lang: localStorage.getItem("lang") || "en-us",
    };
  },
  methods: {
    handleSelect(e) {
      localStorage.setItem("lang", e.target.value);
    },
  },
};
</script>

