<template>
  <tr>
    <th @click="handleClick(0)" class="px-6 py-3">#</th>
    <th @click="handleClick(1)" class="px-6 py-3 text-left">Name</th>
    <th @click="handleClick(2)" class="px-6 py-3">Price</th>
    <th @click="handleClick(3)" class="px-6 py-3">24h%</th>
    <th @click="handleClick(4)" class="px-6 py-3">7d%</th>
    <th @click="handleClick(5)" class="px-6 py-3">Market Cap</th>
    <th @click="handleClick(6)" class="px-6 py-3">Volume(24h)</th>
    <th @click="handleClick(7)" class="px-6 py-3">Last 7 Days</th>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      selectedHead: {
        idx: null,
        sortStatus: null,
      },
    };
  },
  methods: {
    handleClick(idx) {
      this.selectedHead.idx = idx;
    },
  },
};
</script>