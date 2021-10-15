<template>
  <router-link
    v-if="page !== '...'"
    :to="{ query: { page } }"
    :class="isCurrentPage ? 'bg-blue text-white' : 'text-lightGrey-300'"
    class="inline-block px-[10px] py-[4px] rounded-[2px]"
  >
    {{ page }}
  </router-link>

  <div
    v-else
    class="inline-block px-[12px] py-[6px] rounded-[2px] text-lightGrey-300"
  >
    {{ page }}
  </div>
</template>

<script>
import { computed, inject, toRefs } from "vue";
export default {
  props: ["page"],
  setup(props) {
    const { page } = toRefs(props);
    const currentPage = inject("currentPage");
    const isCurrentPage = computed(() => currentPage.value == page.value);

    return {
      isCurrentPage,
      currentPage,
      page,
    };
  },
};
</script>