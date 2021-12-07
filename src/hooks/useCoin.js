import { ref, watchEffect, watch, computed } from 'vue';
import { coinApi } from '@/apis/coinApi.js';
import { useRoute } from 'vue-router';

export function useCoin() {
  const route = useRoute();
  const coins = ref([]);
  const coinList = ref([]);
  const currentPage = ref(parseInt(route.query.page) || 1);
  const isCoinsLoading = ref(false);
  const isCoinListLoading = ref(false);
  const totalPage = computed(() => Math.ceil(coinList.value.length / 100));
  const paginations = ref([1, 2, 3, 4, 5, '...', totalPage.value]);
  const selectedHeader = ref({
    name: 'market_cap',
    method: 'DESC',
  });
  const isFirstPage = computed(() => {
    if (!route.query.hasOwnProperty('page')) return true;
    return route.query.page == 1;
  });
  const isLastPage = computed(() => route.query.page == totalPage.value);

  const fetchCoins = async ({ page }) => {
    try {
      isCoinsLoading.value = true;
      const res = await coinApi.get(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=7d`
      );
      coins.value = res.data;
      isCoinsLoading.value = false;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchCoinList = async () => {
    try {
      isCoinListLoading.value = true;
      const res = await coinApi.get('coins/list');
      coinList.value = res.data;
      isCoinListLoading.value = false;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const sortCoins = (property) => {
    // 如果使用者點擊同一個 header，名稱不變，method 轉換
    if (selectedHeader.value.name == property) {
      selectedHeader.value.method =
        selectedHeader.value.method == 'DESC' ? 'ASC' : 'DESC';
    }
    //  如果使用者點擊不同 header，名稱取代，method 改成 DESC
    else {
      selectedHeader.value.name = property;
      selectedHeader.value.method = 'DESC';
    }

    // name 是 string，所以會出問題
    if (property == 'name') {
      coins.value.sort((a, b) => {
        if (selectedHeader.value.method == 'DESC') {
          if (a[property] > b[property]) {
            return -1;
          }
          if (a[property] < b[property]) {
            return 1;
          }
          return 0;
        } else {
          if (a[property] < b[property]) {
            return -1;
          }
          if (a[property] > b[property]) {
            return 1;
          }
          return 0;
        }
      });
    }
    // 如果 property 為 sparkline_in_7d，等同於 price_change_percentage_7d_in_currency 的 sorting 方式
    else if (property == 'sparkline_in_7d') {
      property = 'price_change_percentage_7d_in_currency';
      coins.value.sort((a, b) => {
        if (selectedHeader.value.method == 'DESC') {
          return b[property] - a[property];
        } else {
          return a[property] - b[property];
        }
      });
    }
    // 除了 name, last_7_days 以外的，都是數字：
    else {
      coins.value.sort((a, b) => {
        if (selectedHeader.value.method == 'DESC') {
          return b[property] - a[property];
        } else {
          return a[property] - b[property];
        }
      });
    }
  };

  // 當 Route 中的 ?page 變動時，重新取得 coins
  watch(
    () => route.query.page,
    () => {
      currentPage.value = parseInt(route.query.page) || 1;
      fetchCoins({ page: currentPage.value });
      window.scrollTo({
        top: 0,
      });
    }
  );

  // 當 currentPage 變動時，改變 paginations
  watchEffect(() => {
    // paginations 尾巴的狀況
    if (currentPage.value > totalPage.value - 4) {
      paginations.value = [
        1,
        '...',
        totalPage.value - 4,
        totalPage.value - 3,
        totalPage.value - 2,
        totalPage.value - 1,
        totalPage.value,
      ];
    }
    // Pagination 中間的狀況
    else if (currentPage.value > 4) {
      paginations.value = [
        1,
        '...',
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        '...',
        totalPage.value,
      ];
    }
    // Pagination 起始的狀況
    else if (currentPage.value < 5) {
      paginations.value = [1, 2, 3, 4, 5, '...', totalPage.value];
    }
  });

  return {
    isCoinListLoading,
    isCoinsLoading,
    paginations,
    selectedHeader,
    coins,
    coinList,
    fetchCoins,
    fetchCoinList,
    sortCoins,
    currentPage,
    totalPage,
    isFirstPage,
    isLastPage,
  };
}
