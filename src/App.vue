<template>
  <div id="app">
    <Header />
    <main
      class="
        max-w-[1280px]
        mx-auto
        relative
        top-[73px]
        bottom-[62px]
        overflow-y-auto
      "
    >
      <router-view />
    </main>
    <Footer />
  </div>
</template>
