<template>
  <div v-click-away="onClickAway" class="relative">
    <div
      class="
        relative
        border-white border-[1px]
        rounded-[2px]
        bg-dark
        text-[14px]
        h-[34px]
        w-[70px]
        flex
        items-center
        cursor-pointer
      "
      @click="onClickCurrentLang"
    >
      <span class="ml-3">{{ currentLang.label }}</span>
      <div class="absolute right-1">
        <ArrowDown color="#fff" />
      </div>
    </div>

    <!-- Dropdown -->
    <div v-if="isShowDropDown" class="absolute">
      <div
        v-for="notCurrentLang in notCurrentLangs"
        :key="notCurrentLang.lang"
        class="
          border-white border-[1px] border-t-[0px]
          rounded-[2px] rounded-t-none
          bg-dark
          text-[14px]
          h-[34px]
          w-[70px]
          flex
          items-center
          cursor-pointer
          hover:bg-white
          hover:text-dark
        "
        @click="onClickNotCurrentLang(notCurrentLang.lang)"
      >
        <span class="ml-3">{{ notCurrentLang.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const languages = [
  {
    label: "EN",
    lang: "en-US",
  },
  {
    label: "繁體",
    lang: "zh-TW",
  },
];

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isShowDropDown = ref(false);

    const currentLang = ref(
      languages.find((language) => store.state.lang == language.lang)
    );

    const notCurrentLangs = ref(
      languages.filter((language) => store.state.lang !== language.lang)
    );

    const onClickCurrentLang = () => {
      isShowDropDown.value = !isShowDropDown.value;
    };

    const onClickNotCurrentLang = (lang) => {
      router.push({
        path: `/${lang}`,
        query: route.query,
      });
      isShowDropDown.value = false;
    };

    const onClickAway = () => {
      isShowDropDown.value = false;
    };

    watch(
      () => store.state.lang,
      () => {
        currentLang.value = languages.find(
          (language) => store.state.lang == language.lang
        );
        notCurrentLangs.value = languages.filter(
          (language) => store.state.lang !== language.lang
        );
      }
    );

    return {
      isShowDropDown,
      currentLang,
      notCurrentLangs,
      onClickCurrentLang,
      onClickNotCurrentLang,
      onClickAway,
    };
  },
};
</script>