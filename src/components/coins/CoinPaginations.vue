<template>
  <nav class="space-x-[2px] text-[14px] flex justify-center items-center">
    <!-- Last Page -->
    <router-link v-if="!isFirstPage" :to="{ query: { page: currentPage - 1 } }">
      <ArrowLeft :color="isFirstPage ? '#606266' : '#C0C4CC'" />
    </router-link>
    <ArrowLeft v-else :color="isFirstPage ? '#606266' : '#C0C4CC'" />

    <!-- Pagination -->
    <router-link
      :to="{ query: { page } }"
      v-for="page in paginations"
      :key="page"
    >
      <CoinPaginationItem
        :currentPage="currentPage"
        :isCurrentPage="page == currentPage"
        :page="page"
      />
    </router-link>

    <!-- Next Page -->
    <router-link v-if="!isLastPage" :to="{ query: { page: currentPage + 1 } }">
      <ArrowRight :color="isLastPage ? '#606266' : '#C0C4CC'" />
    </router-link>
    <ArrowRight v-else :color="isLastPage ? '#606266' : '#C0C4CC'" />
  </nav>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const totalPage = inject("totalPage");
    const currentPage = inject("currentPage");
    const isFirstPage = inject("isFirstPage");
    const isLastPage = inject("isLastPage");
    const paginations = inject("paginations");
    return { totalPage, currentPage, isFirstPage, isLastPage, paginations };
  },
};
</script>