<template>
  <div class="px-[16px] pt-[37px] pb-[92px]">
    <h1 class="text-[20px] font-bold mb-[40px]">
      {{ t("heading", { count: coins.length * currentPage }) }}
    </h1>
    <CoinList />
  </div>
</template>


<script>
import { useCoin } from "@/hooks/useCoin";
import { useI18n } from "vue-i18n";
import { provide } from "vue";
import { useNotification } from "naive-ui";

export default {
  setup() {
    const notification = useNotification();
    const { t } = useI18n();
    const {
      isCoinsLoading,
      isCoinListLoading,
      selectedHeader,
      coins,
      fetchCoins,
      fetchCoinList,
      currentPage,
      totalPage,
      isFirstPage,
      isLastPage,
      sortCoins,
      paginations,
    } = useCoin();
    provide("coins", coins);
    provide("isCoinsLoading", isCoinsLoading);
    provide("isCoinListLoading", isCoinListLoading);
    provide("currentPage", currentPage);
    provide("totalPage", totalPage);
    provide("isFirstPage", isFirstPage);
    provide("isLastPage", isLastPage);
    provide("sortCoins", sortCoins);
    provide("selectedHeader", selectedHeader);
    provide("paginations", paginations);

    fetchCoins({ page: currentPage.value }).catch((error) =>
      notification.error({ content: t("network_error"), duration: 5000 })
    );
    fetchCoinList().catch((error) => {
      notification.error({ content: t("network_error"), duration: 5000 });
    });

    return { coins, totalPage, t, currentPage };
  },
};
</script>