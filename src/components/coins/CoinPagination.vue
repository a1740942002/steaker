<template>
  <nav class="space-x-[2px] text-[14px] flex justify-center items-center">
    <ArrowLeft color="#606266" />
    <router-link to="/" v-for="page in pages" :key="page">
      <Pagination :isCurrentPage="page == currentPage" :page="page" />
    </router-link>
    <ArrowRight color="#C0C4CC" />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: 8,
      currentPage: 1,
    };
  },
};
</script>