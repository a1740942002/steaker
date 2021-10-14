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
    const { coins } = useCoin();
    provide("coins", coins);

    return { coins };
  },
};
</script>