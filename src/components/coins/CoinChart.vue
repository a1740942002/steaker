<template>
  <canvas :id="name" width="200" height="100"></canvas>
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
  },
  setup(props) {
    const { name, sparkline_in_7d } = toRefs(props);
    const array = sparkline_in_7d.value;
    onMounted(() => {
      const ctx = document.getElementById(name.value);
      const labels = array.map((item) => "");
      const data = {
        labels: labels,
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 0.01,
            data: array,
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
            },
            y: {
              ticks: {
                display: false,
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