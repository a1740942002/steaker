<template>
  <header
    class="
      bg-dark
      min-h-[73px]
      w-full
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      px-[16px]
      py-[26px]
      sm:py-[20px]
      sm:px-[53px]
      border-b-[1px] border-white
    "
  >
    <router-link to="/">
      <div class="block max-w-[125px] sm:min-w-[184px]">
        <img class="object-fit" src="../assets/steaker-logo.png" alt="" />
      </div>
    </router-link>
    <!-- <Switcher /> -->
    <LangSwitcher />
  </header>
</template>
