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
import { inject, computed, watchEffect } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const currentMonth = inject('currentMonth')
    const currentYear = inject('currentYear')
    const transactionStore = useTransactionStore()
    const transactionList = computed(() => transactionStore.totalTransactionList)

    const chartData = computed(() => {
      const transactions = transactionList.value.filter(transaction => transaction.memberId === 'dh1010a')
      const monthlyIncome = Array(12).fill(0)
      const monthlyExpense = Array(12).fill(0)

      // 최근 5개월의 범위를 계산
      const startMonth = (currentMonth.value - 2 + 12) % 12;
      const endMonth = (currentMonth.value + 2) % 12;
      const startYear = currentYear.value - (currentMonth.value < 3 ? 1 : 0);
      const endYear = currentYear.value + (currentMonth.value > 10 ? 1 : 0);

      transactions.forEach(transaction => {
        const date = new Date(transaction.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        
        // 최근 5개월 내의 데이터만 고려
        if ((year === startYear && month >= startMonth) || (year === currentYear.value && month === currentMonth.value) || (year === endYear && month <= endMonth)) {
          const price = parseFloat(transaction.price);
          
          if (transaction.type === 'Pay') {
            monthlyExpense[month] += price;
          } else if (transaction.type === 'Income') {
            monthlyIncome[month] += price;
          }
        }
      });

      // 최근 5개월만 labels와 data를 사용
      const labels = [];
      const incomeData = [];
      const expenseData = [];

      for (let i = -2; i <= 2; i++) {
        const month = (currentMonth.value - 1 + i + 12) % 12;
        const year = currentYear.value + (month === 11 && i > 0 ? -1 : month === 0 && i < 0 ? 1 : 0);
        labels.push(`${month + 1}월`);
        incomeData.push(monthlyIncome[month]);
        expenseData.push(monthlyExpense[month]);
      }

      return {
        labels: labels,
        datasets: [
          {
            label: '수입',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: incomeData
          },
          {
            label: '지출',
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
      chartData,
      chartOptions
    }
  }
}
</script>
