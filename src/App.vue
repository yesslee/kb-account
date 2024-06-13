<template>
  <div class="container">
    <Navigator></Navigator>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { useMemberStore } from "@/stores/transactions.js";
import { useTransactionStore } from "@/stores/transactions.js";
import Navigator from "@/components/Navigator.vue";

// Navigator 관련
const month = new Date().getMonth() + 1;
console.log("test", month);
provide("month", month);

// 거래내역 관련
const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;

fetchTransactionList("dh1010a", "2024-06");
fetchMember("dh1010a");
</script>

<style scoped></style>
