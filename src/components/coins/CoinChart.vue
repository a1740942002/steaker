<template>
  <canvas :id="name" class="max-w-[200px] max-h-[60px]"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import { toRefs, onMounted } from "vue";
export default {
  props: {
    name: {
      type: String,
    },
    sparkline_in_7d: {
      type: Array,
    },
    priceChange7d: {
      type: Number,
    },
  },
  setup(props) {
    const { name, priceChange7d, sparkline_in_7d } = toRefs(props);
    const array = sparkline_in_7d.value;
    onMounted(() => {
      const ctx = document.getElementById(name.value);
      const labels = array.map(() => "");
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: "#fff",
            borderColor: priceChange7d.value > 0 ? "#16C784" : "#EA3943",
            borderWidth: 1.5,
            data: array,
            pointRadius: 0,
          },
        ],
      };
      const config = {
        type: "line",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },
        },
      };

      new Chart(ctx, config);
    });

    return {
      name,
    };
  },
};
</script>