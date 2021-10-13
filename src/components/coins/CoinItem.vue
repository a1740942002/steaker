<template>
  <tr class="font-normal" :class="idx % 2 == 1 && 'bg-darkBlue'">
    <td class="px-6 py-3">{{ coin.market_cap_rank }}</td>
    <td class="px-6 py-3 text-left">
      <div class="flex items-center min-w-[140px]">
        <div class="w-[24px] h-[24px] rounded-full mr-[9px]">
          <img :src="coin.image" class="object-fit" />
        </div>
        <div>
          <p class="font-bold">{{ id }}</p>
          <span class="text-lightGrey-200 text-[12px]">{{ symbol }}</span>
        </div>
      </div>
    </td>
    <td class="px-6 py-3">${{ price }}</td>
    <td
      class="px-6 py-3"
      :class="priceChange24h > 0 ? 'text-green' : 'text-red'"
    >
      <div class="flex items-center">
        <ArrowUp v-if="priceChange24h > 0" color="#16C784" />
        <ArrowDown v-else color="#EA3943" />
        {{ priceChange24h < 0 ? -priceChange24h : priceChange24h }}%
      </div>
    </td>
    <td
      class="px-6 py-3"
      :class="priceChange7d > 0 ? 'text-green' : 'text-red'"
    >
      <div class="flex items-center">
        <ArrowUp v-if="priceChange7d > 0" color="#16C784" />
        <ArrowDown v-else color="#EA3943" />
        {{ priceChange7d < 0 ? -priceChange7d : priceChange7d }}%
      </div>
    </td>
    <td class="px-6 py-3">${{ marketCap }}</td>
    <td class="px-6 py-3">${{ volume24h }}</td>
    <td class="px-6 py-3">chartdasdsadasdas</td>
  </tr>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    coin: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  computed: {
    id() {
      return _.startCase(this.$props.coin.id);
    },
    symbol() {
      return this.$props.coin.symbol.toUpperCase();
    },
    price() {
      return this.$props.coin.current_price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    priceChange24h() {
      return _.round(this.$props.coin.price_change_percentage_24h, 2);
    },
    priceChange7d() {
      return _.round(
        this.$props.coin.price_change_percentage_7d_in_currency,
        2
      );
    },
    marketCap() {
      return this.$props.coin.market_cap
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    volume24h() {
      return this.$props.coin.market_cap_change_24h
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>