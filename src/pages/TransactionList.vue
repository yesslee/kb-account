<template>
  <link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <br>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <!-- FilterBar component to handle filtering -->
        <FilterBar @filter-category="filterCategory" @filter-delivery="filterDelivery" @filter-price-range="filterPriceRange"></FilterBar>
      </div>
      <div class="col-md-9">
        <div class="list-header" style="width: 80%; margin: 0 auto;">
          <div class="list-header-left d-flex align-items-center">
            <p class="list-header-total mb-0 me-4 fs-3">전체 내역 {{ filteredTransactionList.length }}건</p>
          </div>
          <br />
          <br />
          <br />
          <div class="list-header-right d-flex align-items-center">
            <div class="d-flex align-items-center me-1">
              <!-- <input
                class="form-check-input me-1"
                type="checkbox"
                :checked="isIncomeChecked"
                @change="handleIncomeCheckboxChange"
                id="incomeBox"
              /> -->
              <p class="list-header-money mb-0 me-1">수입 {{formatNumber(totalIncome)}}</p>
            </div>
            <div class="d-flex align-items-center me-1">
              <!-- <input
                class="form-check-input me-1"
                type="checkbox"
                :checked="isPayChecked"
                @change="handlePayCheckboxChange"
                id="payBox"
              /> -->
              <p class="list-header-money mb-0" style="color: #E139C2">지출 {{formatNumber(totalPay)}}</p>
            </div>
          </div>
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
              <TransactionItem v-for="transaction in item.transactions" @click="showModal(transaction)" :key="transaction.id" :transactionItem="transaction" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TransactionEditModal v-if="selectedTransaction != null" :show="showTransactionModal" :transactionItem="selectedTransaction" @sendClose="closeModal" />
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useTransactionStore } from '@/stores/transactions.js';
import TransactionItem from '@/pages/TransactionItem.vue';
import TransactionEditModal from '@/components/TransactionEditModal.vue';
import FilterBar from "@/pages/FilterBar.vue";

let showTransactionModal = ref(false);
let selectedTransaction = ref(null);

const showModal = (transactionData) => {
  if (transactionData) {
    selectedTransaction.value = { ...transactionData };
    showTransactionModal.value = true;
  }
};

const closeModal = () => {
  showTransactionModal.value = false;
  selectedTransaction.value = null;
};

const isIncomeChecked = ref(true);
const isPayChecked = ref(true);
const transactionStore = useTransactionStore();
const transactionList = computed(() => transactionStore.transactionList);

const totalIncome = computed(() => calculateTotalIncome(filteredTransactionList.value));
const totalPay = computed(() => calculateTotalPay(filteredTransactionList.value));

const handleIncomeCheckboxChange = () => {
  isIncomeChecked.value = !isIncomeChecked.value;
};

const handlePayCheckboxChange = () => {
  isPayChecked.value = !isPayChecked.value;
};

// Filter related state and methods
const selectedCategories = ref([]);
const selectedDelivery = ref("");
const selectedPriceRange = ref([0, 1000000]);

const filterCategory = (categories) => {
  selectedCategories.value = categories;
};

const filterDelivery = (delivery) => {
  selectedDelivery.value = delivery;
};

const filterPriceRange = (range) => {
  selectedPriceRange.value = range;
};

// Filtered transaction list
const filteredTransactionList = computed(() => {
  let filtered = transactionList.value;
  if (selectedCategories.value.length) {
    filtered = filtered.filter((transaction) => selectedCategories.value.includes(transaction.category));
  }
  if (selectedDelivery.value) {
    filtered = filtered.filter((transaction) => transaction.type === selectedDelivery.value);
  }
  if (selectedPriceRange.value) {
    filtered = filtered.filter(
      (transaction) =>
        parseFloat(transaction.price) >= selectedPriceRange.value[0] &&
        parseFloat(transaction.price) <= selectedPriceRange.value[1]
    );
  }
  return filtered;
});

const groupedTransactions = computed(() => {
  const groups = groupByDate(filteredTransactionList.value);
  const dailyTotals = calculateDailyTotals(filteredTransactionList.value);
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

watch([isIncomeChecked, isPayChecked], () => {
  filteredTransactionList.value = computeFilteredTransactions(
    groupedTransactions.value,
    isIncomeChecked.value,
    isPayChecked.value
  );
});

function computeFilteredTransactions(groupedTransactions, isIncomeChecked, isPayChecked) {
  if (isIncomeChecked === true && isPayChecked === true) {
    return groupedTransactions;
  } else if (isIncomeChecked === true) {
    return Object.keys(groupedTransactions).reduce((filtered, date) => {
      filtered[date] = {
        ...groupedTransactions[date],
        transactions: groupedTransactions[date].income,
      };
      return filtered;
    }, {});
  } else if (isPayChecked === true) {
    return Object.keys(groupedTransactions).reduce((filtered, date) => {
      filtered[date] = {
        ...groupedTransactions[date],
        transactions: groupedTransactions[date].pay,
      };
      return filtered;
    }, {});
  } else {
    return {};
  }
}

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
    const date = new Date(transaction.date).toLocaleDateString("ko-KR");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});
}

function calculateDailyTotals(transactions) {
  return transactions.reduce((dailyTotals, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString("ko-KR");
    if (!dailyTotals[date]) {
      dailyTotals[date] = { income: 0, pay: 0 };
    }
    if (transaction.type === "Income") {
      dailyTotals[date].income += parseFloat(transaction.price);
    } else if (transaction.type === "Pay") {
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
  color: #56ABD8;
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
  border-bottom: 1px solid #E0E0E0;
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
  color: #56ABD8;
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
