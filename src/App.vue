<template>
  
  <div class="container">
    <Navigator :fetchTransactions="fetchTransactionsForMonth"></Navigator>
    <router-view></router-view>
    <!-- <div class="row"> -->
    <!-- <div class="col"><FilterBar></FilterBar></div>
      <div class="col"><router-view></router-view></div>
    </div> -->
  </div>
</template>

<script setup>

// import { computed,provide } from 'vue';
// import { useMemberStore} from '@/stores/transactions.js'
// import { useTransactionStore} from '@/stores/transactions.js'
// import Navigator from "@/components/Navigator.vue";
// // import FilterBar from "@/pages/FilterBar.vue";

// const memberStore = useMemberStore();
// const transactionStore = useTransactionStore();

// const fetchMember = memberStore.fetchMember;
// const fetchTransactionList = transactionStore.fetchTransactionList;

// const month = new Date().getMonth() + 1;
// console.log('test',month);
// provide('month',month)

// fetchTransactionList("dh1010a", "2024-06");
// fetchMember("dh1010a");

import { provide, ref } from 'vue';
import { useMemberStore, useTransactionStore } from '@/stores/transactions.js';
import Navigator from "@/components/Navigator.vue";

const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;

const month = ref(new Date().getMonth() + 1);
const year = ref(new Date().getFullYear());

provide('month', month);

fetchTransactionList("dh1010a", `${year.value}-${String(month.value).padStart(2, '0')}`);
fetchMember("dh1010a");

function fetchTransactionsForMonth(newMonth) {
  month.value = newMonth;
  fetchTransactionList("dh1010a", `${year.value}-${String(month.value).padStart(2, '0')}`);
}
</script>

<style scoped></style>