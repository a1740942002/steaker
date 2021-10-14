import { ref } from 'vue';
import { coinApi } from '@/apis/coinApi.js';

export function useCoin() {
  const coins = ref([]);

  const fetchCoins = async ({ perPage, page }) => {
    try {
      const res = await coinApi.get(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=7d`
      );
      coins.value = res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    coins,
    fetchCoins,
  };
}
