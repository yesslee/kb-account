<template>
    <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { useTransactionStore } from '@/stores/transactions.js'
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale) 
  
  export default {
    name: 'BarChart',
    components: { Bar },
    setup(){
      const route = useRoute()
      const id = ref(null)

      onMounted(()=>{
        id.value = route.params.id
      })
      return { id }
    },
    data() {

      const transactionStore = useTransactionStore();
      const transactionList = computed(() => transactionStore.fetchTransactionList(id));
      
      return {
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [
                {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [40, 20, 80, 10]
                }
            ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>