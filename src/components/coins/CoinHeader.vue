<template>
  <tr>
    <th @click="sortCoins('market_cap_rank')" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHeader="selectedHeader" name="market_cap_rank"
        >#</coin-header-title
      >
    </th>
    <th @click="sortCoins('name')" class="px-6 py-3 text-left cursor-pointer">
      <div class="flex items-center">
        Name
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
    <th @click="sortCoins('current_price')" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHeader="selectedHeader" name="current_price"
        >Price</coin-header-title
      >
    </th>
    <th
      @click="sortCoins('price_change_percentage_24h')"
      class="px-6 py-3 cursor-pointer"
    >
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="price_change_percentage_24h"
        >24h%</coin-header-title
      >
    </th>
    <th
      @click="sortCoins('price_change_percentage_7d_in_currency')"
      class="px-6 py-3 cursor-pointer"
    >
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="price_change_percentage_7d_in_currency"
        >7d%</coin-header-title
      >
    </th>
    <th @click="sortCoins('market_cap')" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHeader="selectedHeader" name="market_cap">
        Market Cap</coin-header-title
      >
    </th>
    <th
      @click="sortCoins('market_cap_change_24h')"
      class="px-6 py-3 cursor-pointer"
    >
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="market_cap_change_24h"
      >
        Volume(24h)</coin-header-title
      >
    </th>
    <th class="px-6 py-3">Last 7 Days</th>
  </tr>
</template>

<script>
import CoinHeaderTitle from "./CoinHeaderTitle.vue";
import { inject } from "vue";
export default {
  components: { CoinHeaderTitle },
  setup() {
    const sortCoins = inject("sortCoins");
    const selectedHeader = inject("selectedHeader");

    return { sortCoins, selectedHeader };
  },
};
</script>