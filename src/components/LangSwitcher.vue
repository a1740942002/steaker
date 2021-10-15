<template>
  <select
    class="
      border-white border-[1px]
      rounded-[2px]
      bg-dark
      text-[14px]
      max-h-[34px]
      pl-[16px]
      pr-[32px]
      py-[4px]
      outline-none
    "
    :value="lang"
    @change="handleSelect"
  >
    <option class="hover:bg-white" selected value="en-US">EN</option>
    <option class="hover:bg-white" value="zh-TW">繁體</option>
  </select>
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
    const lang = computed(() => {
      return store.state.lang;
    });
    const handleSelect = (e) => {
      router.push({
        path: `/${e.target.value}`,
        query: route.query,
      });
    };

    return { lang, handleSelect };
  },
};
</script>

<style scoped>
select {
  background-image: url("@/assets/downIcon.svg");
}
</style>