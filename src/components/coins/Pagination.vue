<template>
  <div
    :class="isCurrentPage && 'bg-blue text-white'"
    class="inline-block px-[12px] py-[6px] rounded-[2px] text-lightGrey-300"
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
  },
};
</script>