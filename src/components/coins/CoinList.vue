<template>
  <div class="max-w-[1280px] overflow-x-auto">
    <table class="text-right text-[14px]">
      <thead>
        <CoinHeader />
      </thead>
      <tbody>
        <CoinItem
          v-for="(coin, idx) in coins"
          :idx="idx"
          :key="coin.id"
          :coin="coin"
        />
      </tbody>
    </table>
  </div>
  <div class="pt-[60px]">
    <CoinPaginations v-if="!isCoinListLoading" />
    <CoinListSkeleton v-else />
  </div>
</template>


<script>
import { inject } from "vue";
export default {
  setup() {
    const coins = inject("coins");
    const currentPage = inject("currentPage");
    const isCoinsLoading = inject("isCoinsLoading");
    const isCoinListLoading = inject("isCoinListLoading");
    return { coins, currentPage, isCoinsLoading, isCoinListLoading };
  },
};
</script>