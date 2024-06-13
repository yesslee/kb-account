<template>
  <div style="width: 800px">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useTransactionStore } from '@/stores/transactions.js'
import { useRoute } from 'vue-router'
import { ref, onMounted, computed, watchEffect } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale) 

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const route = useRoute()
    const id = ref(null)
    const transactionStore = useTransactionStore();
    const transactionList = computed(() => transactionStore.transactionList);

    // onMounted(async () => {
    //   id.value = route.params.id
    //   const transactionStore = useTransactionStore()
    //   transactionList.value = await transactionStore.fetchTransactionList(id.value)
    // })

    // watchEffect(() => {
    //   console.log(transactionList.value)  // 데이터를 제대로 가져오는지 확인하기 위해 로그 출력
    // })

    const chartData = computed(() => {
      const transactions = transactionList.value.filter(transaction => transaction.memberId === 'dh1010a')
      const monthlyIncome = Array(12).fill(0)
      const monthlyExpense = Array(12).fill(0)

      // 현재 날짜를 기준으로 최근 4개월의 범위를 계산
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const currentMonth = currentDate.getMonth()
      const startMonth = (currentMonth - 3 + 12) % 12
      const startYear = currentYear - (currentMonth < 3 ? 1 : 0)

      transactions.forEach(transaction => {
        const date = new Date(transaction.date)
        const year = date.getFullYear()
        const month = date.getMonth()
        
        // 최근 4개월 내의 데이터만 고려
        if ((year === startYear && month >= startMonth) || (year === currentYear && month <= currentMonth)) {
          const price = parseFloat(transaction.price)
          
          if (transaction.type === 'Pay') {
            monthlyExpense[month] += price
          } else if (transaction.type === 'Income') {
            monthlyIncome[month] += price
          }
        }
      })

      // 최근 4개월만 labels와 data를 사용
      const labels = []
      const incomeData = []
      const expenseData = []

      for (let i = startMonth; i <= currentMonth; i++) {
        labels.push(`${i + 1}월`)
        incomeData.push(monthlyIncome[i])
        expenseData.push(monthlyExpense[i])
      }

      return {
        labels: labels,
        datasets: [
          {
            label: 'Income',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: incomeData
          },
          {
            label: 'Expense',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: expenseData
          }
        ]
      }
    })

    const chartOptions = {
      responsive: true
    }

    return {
      id,
      chartData,
      chartOptions
    }
  }
}
</script>
