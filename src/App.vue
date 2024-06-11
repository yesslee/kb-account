<template>
  <div class="container">
    <Navigator></Navigator>
    <router-view></router-view>
    <!-- <div class="row"> -->
    <!-- <div class="col"><FilterBar></FilterBar></div>
      <div class="col"><router-view></router-view></div>
    </div> -->
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useMemberStore} from '@/stores/transactions.js'
import { useTransactionStore} from '@/stores/transactions.js'
import Navigator from "@/components/Navigator.vue";
// import FilterBar from "@/pages/FilterBar.vue";

const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;
fetchTransactionList("dh1010a");
fetchMember("dh1010a");
</script>

<style scoped></style>