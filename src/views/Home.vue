<template>
  <div class="px-[16px] pt-[37px] pb-[92px]">
    <h1 class="text-[20px] font-bold mb-[40px]">
      {{ t("heading") }}
    </h1>
    <CoinList />
  </div>
</template>


<script>
import { useCoin } from "@/hooks/useCoin";
import { useI18n } from "vue-i18n";
import { provide } from "vue";

export default {
  setup() {
    const { t } = useI18n();
    const {
      selectedHeader,
      coins,
      fetchCoins,
      fetchCoinList,
      currentPage,
      totalPage,
      isFirstPage,
      isLastPage,
      sortCoins,
      paginations,
    } = useCoin();
    provide("coins", coins);
    provide("currentPage", currentPage);
    provide("totalPage", totalPage);
    provide("isFirstPage", isFirstPage);
    provide("isLastPage", isLastPage);
    provide("sortCoins", sortCoins);
    provide("selectedHeader", selectedHeader);
    provide("paginations", paginations);
    fetchCoins({ perPage: 3 });
    fetchCoinList();

    return { coins, totalPage, t };
  },
};
</script>