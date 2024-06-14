<template>
  <Navigator :fetchTransactions="fetchTransactionsForMonth" @updateMonth="updateMonth" ></Navigator>
  <div class="container">
    <router-view :currentMonth="currentMonth" :currentYear="currentYear"></router-view>
  </div>
</template>

<script setup>
import { provide, ref,watch } from "vue";
import { useMemberStore, useTransactionStore } from "@/stores/transactions.js";
import Navigator from "@/components/Navigator.vue";

// Navigator 관련
const currentMonth  = ref(new Date().getMonth() + 1);
const currentYear  = ref(new Date().getFullYear());


// 거래내역 관련
const memberStore = useMemberStore();
const transactionStore = useTransactionStore(); 

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;

fetchTransactionList( 
  "dh1010a",
  `${currentYear.value}-${String(currentMonth.value).padStart(2, "0")}`
);
fetchMember("dh1010a");



function fetchTransactionsForMonth(newMonth) {
  currentMonth.value = newMonth;
  fetchTransactionList(
    "dh1010a",
    `${currentYear.value}-${String(currentMonth.value).padStart(2, "0")}`
  );
}

watch(currentMonth, (newMonth) => {
  fetchTransactionsForMonth(newMonth);
});

provide('currentMonth', currentMonth);
provide('currentYear', currentYear);

</script>

<style scoped></style>