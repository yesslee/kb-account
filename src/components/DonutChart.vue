<template>
  <div style="width: 400px">
    <label for="month-select">Select Month:</label>
    <select id="month-select" v-model="selectedMonth">
      <option v-for="month in months" :key="month.value" :value="month.value">{{ month.text }}</option>
    </select>
    <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTransactionStore } from '@/stores/transactions.js'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DonutChart',
  components: { Doughnut },
  setup() {
    const route = useRoute()
    const id = ref(null)
    const transactionStore = useTransactionStore();
    const transactionList = computed(() => transactionStore.transactionList);
    const selectedMonth = ref(new Date().getMonth() + 1) // 현재 월로 초기화

    // onMounted(async () => {
    //   id.value = route.params.id
    //   const transactionStore = useTransactionStore()
    //   transactionList.value = await transactionStore.fetchTransactionList(id.value)
    // })

    const months = [
      { value: 1, text: '1월' },
      { value: 2, text: '2월' },
      { value: 3, text: '3월' },
      { value: 4, text: '4월' },
      { value: 5, text: '5월' },
      { value: 6, text: '6월' },
      { value: 7, text: '7월' },
      { value: 8, text: '8월' },
      { value: 9, text: '9월' },
      { value: 10, text: '10월' },
      { value: 11, text: '11월' },
      { value: 12, text: '12월' },
    ]

    const chartData = computed(() => {
      const transactions = transactionList.value.filter(transaction => {
        const date = new Date(transaction.date)
        return transaction.memberId === 'dh1010a' && (date.getMonth() + 1) === selectedMonth.value
      })

      // 카테고리별로 데이터 집계
      const categoryData = {}
      transactions.forEach(transaction => {
        const category = transaction.category
        const price = parseFloat(transaction.price)
        if (categoryData[category]) {
          categoryData[category] += price
        } else {
          categoryData[category] = price
        }
      })

      // 카테고리와 데이터 배열로 변환
      const labels = Object.keys(categoryData)
      const data = Object.values(categoryData)
      const backgroundColor = [
        '#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFA726', '#66BB6A', '#26C6DA', '#FF7043'
      ] // 카테고리 수에 따라 색상을 추가하세요.

      return {
        labels: labels,
        datasets: [
          {
            backgroundColor: backgroundColor.slice(0, labels.length),
            data: data
          }
        ]
      }
    })

    const chartOptions = {
      // responsive: true,
      // maintainAspectRatio: false
    }

    return {
      selectedMonth,
      months,
      chartData,
      chartOptions
    }
  }
}
</script>
