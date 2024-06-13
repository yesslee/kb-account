<template>
  <div class="container">
    <Navigator :fetchTransactions="fetchTransactionsForMonth"></Navigator>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { useMemberStore, useTransactionStore } from '@/stores/transactions.js';
import Navigator from "@/components/Navigator.vue";

// Navigator 관련
const month = ref(new Date().getMonth() + 1);
const year = ref(new Date().getFullYear());

provide('month', month);

// 거래내역 관련
const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;

fetchTransactionList("dh1010a", `${year.value}-${String(month.value).padStart(2, '0')}`);
fetchMember("dh1010a");

function fetchTransactionsForMonth(newMonth) {
  month.value = newMonth;
  fetchTransactionList("dh1010a", `${year.value}-${String(month.value).padStart(2, '0')}`);
}
</script>

<style scoped></style>
