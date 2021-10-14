<template>
  <Header />
  <Main />
  <Footer />
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