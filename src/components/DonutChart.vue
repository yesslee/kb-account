<template>
    <Doughnut
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    />
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DonutChart',
    components: { Doughnut },
    data() {
      return {
        chartData: {
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            datasets: [
                {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [40, 20, 80, 10]
                }
            ]
        },
        chartOptions: {
          responsive: true,
        maintainAspectRatio: false
        }
      }
    }
  }
  </script>