<template>
  <tr
    @mouseover="isMouseOver = true"
    @mouseout="isMouseOver = false"
    :class="isMouseOver && 'bg-darkBlue'"
    v-if="!isCoinsLoading"
    class="font-normal hover:cursor-pointer"
  >
    <td
      :class="isMouseOver && 'bg-darkBlue'"
      class="sticky sm:static left-0 bg-dark pl-[10px] pr-6 py-3"
    >
      <div class="min-w-[24px]">
        {{ coin.market_cap_rank || "#" }}
      </div>
    </td>
    <td
      :class="isMouseOver && 'bg-darkBlue'"
      class="sticky sm:static left-[58px] bg-dark px-6 py-3 text-left"
    >
      <div class="flex items-center max-w-[140px]">
        <div class="w-[24px] h-[24px] rounded-full mr-[9px]">
          <img :src="coin.image" class="object-fit" />
        </div>
        <div>
          <p class="font-bold">{{ name }}</p>
          <span class="text-lightGrey-200 text-[12px]">{{ symbol }}</span>
        </div>
      </div>
    </td>
    <td class="px-6 py-3">{{ price }}</td>
    <td
      class="px-6 py-3"
      :class="priceChange24h > 0 ? 'text-green' : 'text-red'"
    >
      <div class="flex items-center justify-end">
        <ArrowUp v-if="priceChange24h > 0" color="#16C784" />
        <ArrowDown v-else-if="priceChange24h < 0" color="#EA3943" />
        {{ priceChange24h < 0 ? -priceChange24h : priceChange24h }}%
      </div>
    </td>
    <td
      class="px-6 py-3"
      :class="priceChange7d > 0 ? 'text-green' : 'text-red'"
    >
      <div class="flex items-center justify-end">
        <ArrowUp v-if="priceChange7d > 0" color="#16C784" />
        <ArrowDown v-else-if="priceChange7d < 0" color="#EA3943" />
        {{ priceChange7d < 0 ? -priceChange7d : priceChange7d }}%
      </div>
    </td>
    <td class="px-6 py-3">{{ marketCap }}</td>
    <td class="px-6 py-3 min-w-[150px]">{{ volume24h }}</td>
    <td class="px-6 py-3">
      <CoinChart
        :priceChange7d="priceChange7d"
        :sparkline_in_7d="coin.sparkline_in_7d.price"
        :name="name"
      />
    </td>
  </tr>
  <CoinsSkeleton v-else />
</template>

<script>
import _ from "lodash";
import { toRefs, computed, inject, ref } from "vue";

export default {
  props: {
    coin: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  setup(props) {
    const isMouseOver = ref(false);
    const isCoinsLoading = inject("isCoinsLoading");
    const { coin, idx } = toRefs(props);
    const name = computed(() => coin.value.name);
    const symbol = computed(() => coin.value.symbol.toUpperCase());
    const price = computed(() => {
      let result;
      // 高於 1000 的，變成整數並使用 "," 千分位
      if (coin.value.current_price > 1000) {
        result =
          "$" +
          parseInt(coin.value.current_price)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      result = coin.value?.current_price?.toString();

      return result ? "$" + result : "null";
    });
    const priceChange24h = computed(() =>
      _.round(coin.value?.price_change_percentage_24h, 2)
    );

    const priceChange7d = computed(() =>
      _.round(coin.value?.price_change_percentage_7d_in_currency, 2)
    );
    const marketCap = computed(() => {
      const result = parseInt(coin.value?.market_cap);
      return isNaN(result)
        ? "null"
        : "$" + result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    const volume24h = computed(() => {
      const result = parseInt(coin.value?.market_cap_change_24h);
      return isNaN(result)
        ? "null"
        : "$" + result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    return {
      idx,
      name,
      symbol,
      price,
      priceChange24h,
      priceChange7d,
      marketCap,
      volume24h,
      isCoinsLoading,
      isMouseOver,
    };
  },
};
</script>