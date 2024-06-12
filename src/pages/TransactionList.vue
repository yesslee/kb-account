<template>
  <link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <br>
  <div class="list-header" style="width: 80%; margin: 0 auto;">
  <div class="list-header-left d-flex align-items-center">
    <p class="list-header-total mb-0 me-4 fs-3">전체 내역 {{ transactionList.length }}건</p>
  </div>
  <br>
  <br>
  <br>
  <div class="list-header-right d-flex align-items-center">
    <div class="d-flex align-items-center me-1">
      <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault">
      <p class="list-header-money mb-0 me-1">수입 {{formatNumber(totalIncome)}}</p>
    </div>
    <div class="d-flex align-items-center me-1">
      <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault">
      <p class="list-header-money mb-0" style="color: #e139c2">지출 {{formatNumber(totalPay)}}</p>
    </div>
  </div>
</div>

  <div class="day-list">
  </div>

<div class="day-list">
  <div v-for="(item, date) in groupedTransactions" :key="date" class="day-list-item">
    <div class="day-list-header">
      <p class="day-list-date">{{ date }}</p>
      <div class="day-list-totals">
        <p>수입 {{ formatNumber(item.totalIncome) }}</p>
        <p>지출 {{ formatNumber(item.totalPay) }}</p>
      </div>
    </div>
    <div class="transaction-list">
      <TransactionItem v-for="transaction in item.transactions" :key="transaction.id" :transactionItem="transaction" />
    </div>
  </div>
</div>

</template>

<script setup>
import { computed } from 'vue';
import { useTransactionStore } from '@/stores/transactions.js';
import TransactionItem from '@/pages/TransactionItem.vue';

const transactionStore = useTransactionStore();

const transactionList = computed(() => transactionStore.transactionList);
console.log(transactionList);

const totalIncome = computed(() => calculateTotalIncome(transactionStore.transactionList));
const totalPay = computed(() => calculateTotalPay(transactionStore.transactionList));

const groupedTransactions = computed(() => {
  const groups = groupByDate(transactionList.value);
  const dailyTotals = calculateDailyTotals(transactionList.value);
  return Object.keys(groups).reduce((sorted, date) => {
    sorted[date] = {
      transactions: groups[date],
      totalIncome: dailyTotals[date]?.income || 0,
      totalPay: dailyTotals[date]?.pay || 0,
    };
    return sorted;
  }, {});
});

const sortedGroups = Object.keys(groupedTransactions)
  .sort((a, b) => new Date(b) - new Date(a))
  .reduce((sorted, date) => {
    sorted[date] = groupedTransactions[date];
    return sorted;
  }, {});


function calculateTotalIncome(transactions) {
  let totalIncome = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "Income") {
      totalIncome += parseFloat(transactions[i].price);
    }
  }

  return totalIncome;
}

function calculateTotalPay(transactions) {
  let totalPay = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "Pay") {
      totalPay += parseFloat(transactions[i].price);
    }
  }

  return totalPay;
}

function formatNumber(value) {
  return value.toLocaleString();
}

function groupByDate(transactionList) {
  return transactionList.reduce((groups, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString('ko-KR');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});
}
function calculateDailyTotals(transactions) {
  return transactions.reduce((dailyTotals, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString('ko-KR');
    if (!dailyTotals[date]) {
      dailyTotals[date] = { income: 0, pay: 0 };
    }
    if (transaction.type === 'Income') {
      dailyTotals[date].income += parseFloat(transaction.price);
    } else if (transaction.type === 'Pay') {
      dailyTotals[date].pay += parseFloat(transaction.price);
    }
    return dailyTotals;
  }, {});
}

</script>

<style scoped>
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: black;
  font-weight: bold;
}

.list-header-left {
  display: flex;
  align-items: center;
  color: black;
  font-weight: bold;
}

.list-header-right {
  display: flex;
  align-items: center;
  color: #56abd8;
  font-weight: bold;
}


.list-header-total {
  margin: 0 10px;
  font-size: 100px;
}


.list-header-money {
  margin: 0 10px;
}

.day-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-list-item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 0;
  width: 70%;
}

.day-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  width: 100%;
}

.day-list-date {
  font-size: 20px;
  font-weight: bold;
  /* margin-left: 200px; */
}

.day-list-totals {
  display: flex;
  align-items: center;
  color: #56abd8;
  font-size: 16px;
  width: 30%;
  justify-content: flex-end;
  /* margin-right: 200px; */
}

.day-list-totals > * {
  margin-left: 12px;
}

.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

</style>