<template>
  <nav
    class="animate-pulse space-x-4 text-[14px] flex justify-center items-center"
  >
    <!-- Last Page -->
    <div class="h-2 bg-lightGrey-100 rounded-full min-w-[16px]"></div>

    <!-- Pagination -->
    <ul class="flex space-x-2">
      <li
        v-for="idx in 5"
        :key="idx"
        class="h-[12px] bg-lightGrey-100 rounded-full min-w-[12px]"
      ></li>
    </ul>

    <!-- Next Page -->
    <div class="h-2 bg-lightGrey-100 rounded-full min-w-[16px]"></div>
  </nav>
</template>