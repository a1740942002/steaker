<template>
  <div class="relative">
    <div
      class="
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
      <span class="ml-3 mr-1">{{ currentLang.label }}</span>
      <div>
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
        <span class="ml-3 mr-2">{{ notCurrentLang.label }}</span>
        <div class="opacity-0">
          <ArrowDown color="#fff" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isShowDropDown = ref(false);
    const languages = ref([
      {
        label: "EN",
        lang: "en-US",
        isCurrentLang: store.state.lang == "en-US",
      },
      {
        label: "繁體",
        lang: "zh-TW",
        isCurrentLang: store.state.lang == "zh-TW",
      },
    ]);

    const currentLang = computed(() => {
      return languages.value.find((language) => language.isCurrentLang);
    });

    const notCurrentLangs = computed(() => {
      return languages.value.filter((language) => !language.isCurrentLang);
    });

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

    watch(
      () => store.state.lang,
      () => {
        console.log(123);
      }
    );

    return {
      isShowDropDown,
      currentLang,
      notCurrentLangs,
      onClickCurrentLang,
      onClickNotCurrentLang,
    };
  },
};
</script>