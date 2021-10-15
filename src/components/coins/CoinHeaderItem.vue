<template>
  <th @click="sortCoins(name)" class="px-6 py-3 cursor-pointer">
    <coin-header-title :selectedHeader="selectedHeader" :name="name">{{
      t(name)
    }}</coin-header-title>
  </th>
</template>

<script>
import { inject, toRefs, computed } from "vue";
import { useI18n } from "vue-i18n";
export default {
  props: {
    coinHeader: {
      type: Object,
    },
  },
  setup(props) {
    const sortCoins = inject("sortCoins");
    const selectedHeader = inject("selectedHeader");
    const { coinHeader } = toRefs(props);
    const name = computed(() => coinHeader.value.name);
    const { t } = useI18n();

    return {
      name,
      sortCoins,
      selectedHeader,
      t,
    };
  },
};
</script>