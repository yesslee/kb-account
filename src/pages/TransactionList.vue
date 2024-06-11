<template>
  <h2> 하이</h2>
  <div class="item-list">
    <TransactionItem
      v-for="item in transactionList" :key="item.id" :transactionItem="item"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTransactionStore } from '@/stores/transactions.js';
import TransactionItem from '@/pages/TransactionItem.vue';

const transactionStore = useTransactionStore();

const transactionList = computed(() => transactionStore.transactionList);
</script>

<style scoped>
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
</style>