import { ref, watchEffect, computed } from 'vue';
import { coinApi } from '@/apis/coinApi.js';
import { useRoute } from 'vue-router';

export function useCoin() {
  const coins = ref([]);
  const route = useRoute();
  const currentPage = ref(parseInt(route.query.page) || 1);
  const totalPage = ref(8);
  const selectedHeader = ref({
    name: 'market_cap',
    method: 'DESC',
  });
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

  const sortCoins = (property) => {
    // 如果使用者點擊同一個 header，名稱不變，method 轉換
    if (selectedHeader.value.name == property) {
      selectedHeader.value.method = selectedHeader.value.method == 'DESC' ? 'ASC' : 'DESC';
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
          if (a[property] < b[property]) {
            return -1;
          }
          if (a[property] > b[property]) {
            return 1;
          }
          return 0;
        } else {
          if (a[property] > b[property]) {
            return -1;
          }
          if (a[property] < b[property]) {
            return 1;
          }
          return 0;
        }
      });
    }
    // 除了 name 以外的，都是數字：
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

  // 當 ?Page= 變動時，重新取得 coins
  watchEffect(() => {
    currentPage.value = parseInt(route.query.page);
    fetchCoins({ page: route.query.page });
  });

  return {
    selectedHeader,
    coins,
    fetchCoins,
    sortCoins,
    currentPage,
    totalPage,
    isFirstPage,
    isLastPage,
  };
}
