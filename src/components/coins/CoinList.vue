<template>
  <div class="max-w-[1280px] overflow-x-auto flex flex-col">
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
    <div class="my-5">
      <CoinPagination />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("coin/fetchCoins");
  },
  computed: {
    ...mapState("coin", ["coins"]),
  },
};
</script>