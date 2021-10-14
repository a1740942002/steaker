<template>
  <nav class="space-x-[2px] text-[14px] flex justify-center items-center">
    <!-- Last Page -->
    <router-link v-if="!isFirstPage" :to="{ query: { page: currentPage - 1 } }">
      <ArrowLeft :color="isFirstPage ? '#606266' : '#C0C4CC'" />
    </router-link>
    <ArrowLeft v-else :color="isFirstPage ? '#606266' : '#C0C4CC'" />

    <!-- Pagination -->
    <router-link :to="{ query: { page } }" v-for="page in pages" :key="page">
      <CoinPagination
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
export default {
  data() {
    return {
      pages: 8,
    };
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    isFirstPage() {
      if (!this.$route.query.hasOwnProperty("page")) {
        return true;
      }
      return this.$route.query.page == 1;
    },
    isLastPage() {
      return this.$route.query.page == this.pages;
    },
  },
};
</script>