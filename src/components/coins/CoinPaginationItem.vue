<template>
  <div
    :class="isCurrentPage ? 'bg-blue text-white' : 'text-lightGrey-300'"
    class="inline-block px-[12px] py-[6px] rounded-[2px]"
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