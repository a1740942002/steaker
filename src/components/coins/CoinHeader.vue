<template>
  <tr>
    <th @click="handleClick(0)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="0"
        >#</coin-header-title
      >
    </th>
    <th @click="handleClick(1)" class="px-6 py-3 text-left cursor-pointer">
      <div class="flex items-center relative">
        Name
        <div class="absolute left-9">
          <ArrowUp
            v-show="selectedHead.idx == 1 && selectedHead.sortStatus == 'DESC'"
            color="#fff"
          />
          <ArrowDown
            v-show="selectedHead.idx == 1 && selectedHead.sortStatus == 'ASC'"
            color="#fff"
          />
        </div>
      </div>
    </th>
    <th @click="handleClick(2)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="2"
        >Price</coin-header-title
      >
    </th>
    <th @click="handleClick(3)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="3"
        >24h%</coin-header-title
      >
    </th>
    <th @click="handleClick(4)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="4"
        >7d%</coin-header-title
      >
    </th>
    <th @click="handleClick(5)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="5">
        Market Cap</coin-header-title
      >
    </th>
    <th @click="handleClick(6)" class="px-6 py-3 cursor-pointer">
      <coin-header-title :selectedHead="selectedHead" :idx="6">
        Volume(24h)</coin-header-title
      >
    </th>
    <th @click="handleClick(7)" class="px-6 py-3">Last 7 Days</th>
  </tr>
</template>

<script>
import CoinHeaderTitle from "./CoinHeaderTitle.vue";
export default {
  components: { CoinHeaderTitle },
  data() {
    return {
      selectedHead: {
        idx: 5,
        sortStatus: "DESC",
      },
    };
  },
  methods: {
    handleClick(idx) {
      this.selectedHead.idx = idx;
      if (!this.selectedHead.sortStatus) {
        this.selectedHead.sortStatus = "DESC";
      } else if (this.selectedHead.sortStatus == "DESC") {
        this.selectedHead.sortStatus = "ASC";
      } else if (this.selectedHead.sortStatus == "ASC") {
        this.selectedHead.sortStatus = "DESC";
      }
    },
  },
};
</script>