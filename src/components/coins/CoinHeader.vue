<template>
  <tr>
    <th @click="sortCoins('market_cap_rank')" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHeader="selectedHeader" name="market_cap_rank"
        >#</coin-header-title
      >
    </th>
    <th @click="sortCoins('name')" class="px-6 py-3 text-left cursor-pointer">
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
    <th @click="sortCoins('current_price')" class="px-6 py-3 cursor-pointer">
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="current_price"
        >{{ t("current_price") }}</coin-header-title
      >
    </th>
    <th
      @click="sortCoins('price_change_percentage_24h')"
      class="px-6 py-3 cursor-pointer"
    >
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="price_change_percentage_24h"
        >{{ t("price_change_percentage_24h") }}</coin-header-title
      >
    </th>
    <th
      @click="sortCoins('price_change_percentage_7d_in_currency')"
      class="px-6 py-3 cursor-pointer"
    >
      <coin-header-title
        :selectedHeader="selectedHeader"
        name="price_change_percentage_7d_in_currency"
        >{{ t("price_change_percentage_7d_in_currency") }}</coin-header-title
      >
    </th>
    <th @click="sortCoins('market_cap')" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHeader="selectedHeader" name="market_cap">
        {{ t("market_cap") }}</coin-header-title
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
        {{ t("market_cap_change_24h") }}</coin-header-title
      >
    </th>
    <th class="px-6 py-3">{{ t("last_7_days") }}</th>
  </tr>
</template>

<script>
import { useI18n } from "vue-i18n";
import CoinHeaderTitle from "./CoinHeaderTitle.vue";
import { inject } from "vue";
export default {
  components: { CoinHeaderTitle },
  setup() {
    const sortCoins = inject("sortCoins");
    const selectedHeader = inject("selectedHeader");
    const { t } = useI18n();

    return { sortCoins, selectedHeader, t };
  },
};
</script>