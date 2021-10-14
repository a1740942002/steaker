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
  <div class="my-5">
    <CoinPaginations />
  </div>
</template>


<script>
import { mapState } from "vuex";
import { inject } from "vue";
export default {
  setup() {
    const coins = inject("coins");

    return { coins };
  },
  created() {
    this.$store.dispatch("coin/fetchCoins", {
      perPage: 3,
      page: this.currentPage,
    });
  },
  watch: {
    $route() {
      this.$store.dispatch("coin/fetchCoins", {
        perPage: 3,
        page: this.currentPage,
      });
    },
  },
  computed: {
    ...mapState("coin", ["coins"]),
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
  },
};
</script>