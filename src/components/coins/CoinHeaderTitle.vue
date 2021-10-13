<template>
  <div class="flex items-center justify-end relative">
    <p><slot></slot></p>
    <div class="absolute -right-5">
      <ArrowUp
        v-show="selectedHead.idx == idx && selectedHead.sortStatus == 'ASC'"
        color="#fff"
      />
      <ArrowDown
        v-show="selectedHead.idx == idx && selectedHead.sortStatus == 'DESC'"
        color="#fff"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedHead: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
};
</script>