<template>
  <div class="container">
      <Header />
      <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMemberStore} from '@/stores/transaction.js'
import { useTransactionStore} from '@/stores/transaction.js'


const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransaction = transactionStore.fetchTransaction;
fetchTransaction("dh1010a");
fetchMember("dh1010a");

</script>
