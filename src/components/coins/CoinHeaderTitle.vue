<template>
  <div class="flex items-center justify-end relative">
    <p><slot></slot></p>
    <div class="absolute -right-5">
      <ArrowUp
        v-show="selectedHeader.name == name && selectedHeader.method == 'ASC'"
        color="#fff"
      />
      <ArrowDown
        v-show="selectedHeader.name == name && selectedHeader.method == 'DESC'"
        color="#fff"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedHeader: {
      type: Object,
    },
    name: {
      type: String,
    },
  },
};
</script>