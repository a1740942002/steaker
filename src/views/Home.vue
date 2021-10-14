<template>
  <div class="px-[16px] pt-[37px] pb-[92px]">
    <h1 class="text-[20px] font-bold mb-[40px]">
      Cryptocurrency Prices by Market Cap
    </h1>
    <CoinList />
  </div>
</template>


<script>
import { useCoin } from "@/hooks/useCoin";
import { provide } from "vue";

export default {
  setup() {
    const {
      selectedHeader,
      coins,
      fetchCoins,
      currentPage,
      totalPage,
      isFirstPage,
      isLastPage,
      sortCoins,
    } = useCoin();
    provide("coins", coins);
    provide("currentPage", currentPage);
    provide("totalPage", totalPage);
    provide("isFirstPage", isFirstPage);
    provide("isLastPage", isLastPage);
    provide("sortCoins", sortCoins);
    provide("selectedHeader", selectedHeader);
    fetchCoins({ perPage: 3 });

    return { coins, totalPage };
  },
};
</script>