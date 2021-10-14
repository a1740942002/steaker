<template>
  <div>
    <Header />
    <main class="max-w-[1280px] mx-auto relative overflow-y-auto">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  created() {
    // 初始化 i18n 在 vuex 中
    this.$store.dispatch("initI18n", this.$i18n);
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  display: none;
}
</style>