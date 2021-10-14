<template>
  <div
    :class="isCurrentPage ? 'bg-blue text-white' : 'text-lightGrey-300'"
    class="inline-block px-[12px] py-[6px] rounded-[2px]"
  >
    {{ page }}
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    },
    isCurrentPage: {
      type: Boolean,
    },
    currentPage: {
      type: Number,
    },
  },
};
</script>