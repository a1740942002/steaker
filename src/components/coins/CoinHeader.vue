<template>
  <tr>
    <!-- Rank 特別拆出來是因為它是凍結窗格  -->
    <th
      @click="sortCoins('market_cap_rank')"
      class="sticky left-0 sm:static bg-dark z-10 px-6 py-3 cursor-pointer"
    >
      <coin-header-title :selectedHeader="selectedHeader" name="market_cap_rank"
        >#</coin-header-title
      >
    </th>
    <!-- Name 特別拆出來是因為它對齊左邊 & 凍結窗格 -->
    <th
      @click="sortCoins('name')"
      class="
        sticky
        left-[57px]
        sm:static
        bg-dark
        z-10
        px-6
        py-3
        text-left
        cursor-pointer
      "
    >
      <div class="flex items-center">
        {{ t("name") }}
        <div>
          <ArrowUp
            v-show="
              selectedHeader.name == 'name' && selectedHeader.method == 'DESC'
            "
            color="#fff"
          />
          <ArrowDown
            v-show="
              selectedHeader.name == 'name' && selectedHeader.method == 'ASC'
            "
            color="#fff"
          />
        </div>
      </div>
    </th>
    <CoinHeaderItem
      v-for="coinHeader in coinHeaders"
      :key="coinHeader.name"
      :coinHeader="coinHeader"
    />
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";
import CoinHeaderTitle from "./CoinHeaderTitle.vue";
import { inject } from "vue";

const coinHeaders = [
  {
    name: "current_price",
  },
  {
    name: "price_change_percentage_24h",
  },
  {
    name: "price_change_percentage_7d_in_currency",
  },
  {
    name: "market_cap",
  },
  {
    name: "market_cap_change_24h",
  },
  {
    name: "sparkline_in_7d",
  },
];

export default {
  components: { CoinHeaderTitle },
  setup() {
    const sortCoins = inject("sortCoins");
    const selectedHeader = inject("selectedHeader");
    const { t } = useI18n();

    return { sortCoins, selectedHeader, coinHeaders, t };
  },
};
</script>
