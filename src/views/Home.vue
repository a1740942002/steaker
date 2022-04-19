<template>
  <div
    class="px-[16px] sm:px-[53px] pt-[37px] sm:pt-[70px] pb-[92px] space-y-[40px]"
  >
    <h1 class="text-[20px] font-bold">
      {{ t('heading', { count: 100 * (currentPage - 1) + coins.length }) }}
    </h1>
    <iframe
      class="mx-auto"
      src="https://i.xy.fiance/"
      width="420"
      height="646"
      frameborder="0"
    ></iframe>
    <CoinList />
  </div>
</template>

<script>
import { useCoin } from '@/hooks/useCoin'
import { useI18n } from 'vue-i18n'
import { provide } from 'vue'
import { useNotification } from 'naive-ui'

export default {
  setup() {
    const notification = useNotification()
    const { t } = useI18n()
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
    } = useCoin()
    provide('coins', coins)
    provide('isCoinsLoading', isCoinsLoading)
    provide('isCoinListLoading', isCoinListLoading)
    provide('currentPage', currentPage)
    provide('totalPage', totalPage)
    provide('isFirstPage', isFirstPage)
    provide('isLastPage', isLastPage)
    provide('sortCoins', sortCoins)
    provide('selectedHeader', selectedHeader)
    provide('paginations', paginations)

    fetchCoins({ page: currentPage.value }).catch((error) =>
      notification.error({ content: t('network_error'), duration: 5000 })
    )
    fetchCoinList().catch((error) => {
      notification.error({ content: t('network_error'), duration: 5000 })
    })

    return { coins, totalPage, t, currentPage }
  },
}
</script>
