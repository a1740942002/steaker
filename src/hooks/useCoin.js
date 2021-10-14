import { ref, watchEffect, computed } from 'vue';
import { coinApi } from '@/apis/coinApi.js';
import { useRoute } from 'vue-router';

export function useCoin() {
  const coins = ref([]);
  const route = useRoute();
  const currentPage = ref(parseInt(route.query.page) || 1);
  const totalPage = ref(8);
  const isFirstPage = computed(() => {
    if (!route.query.hasOwnProperty('page')) {
      return true;
    }
    return route.query.page == 1;
  });
  const isLastPage = computed(() => {
    return route.query.page == totalPage.value;
  });

  const fetchCoins = async ({ page }) => {
    try {
      const res = await coinApi.get(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=${page}&sparkline=false&price_change_percentage=7d`
      );
      coins.value = res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // 當 ?Page= 變動時，重新取得 coins
  watchEffect(() => {
    currentPage.value = route.query.page;
    fetchCoins({ page: route.query.page });
  });

  return {
    coins,
    fetchCoins,
    currentPage,
    totalPage,
    isFirstPage,
    isLastPage,
  };
}
