<template>
  <div class="filter-bar">
    <div class="filter-section">
      <h3>카테고리 조회</h3>
      <div class="filter-options">
        <button :class="{'selected': selectedSort === 'food_payment'}" @click="selectSort('food_payment')">식비</button>
        <button :class="{'selected': selectedSort === 'cafe_payment'}" @click="selectSort('cafe_payment')">카페</button>
        <button :class="{'selected': selectedSort === 'drink_payment'}" @click="selectSort('drink_payment')">술/유흥</button>
        <button :class="{'selected': selectedSort === 'transport_payment'}" @click="selectSort('transport_payment')">교통</button>
        <button :class="{'selected': selectedSort === 'month_payment'}" @click="selectSort('month_payment')">월 지출금</button>
      </div>
    </div>
    
    <div class="filter-section">
      <h3>금액 범위</h3>
      <br>
      <vue-slider v-model="priceRange" :min="0" :max="250" :interval="5" tooltip="always" />
    </div>
    
    <div class="filter-section">
      <h3>입/출금 조회</h3>
      <div class="filter-options">
        <button :class="{'selected': selectedDelivery === 'deposit'}" @click="selectDelivery('deposit')">입금</button>
        <button :class="{'selected': selectedDelivery === 'withdraw'}" @click="selectDelivery('withdraw')">출금</button>
      </div>
    </div>
    
    <button class="apply-button" @click="applyFilters">Apply</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

import { useTransactionStore } from '@/stores/transactions.js';
import TransactionItem from '@/pages/TransactionItem.vue';
const transactionStore = useTransactionStore();
const transactionList = computed(() => transactionStore.transactionList);

const selectedSort = ref('');
const priceRange = ref([25, 75]);
const selectedDelivery = ref('');

function selectSort(sort) {
  selectedSort.value = sort;
}

function selectDelivery(delivery) {
  selectedDelivery.value = delivery;
}

function applyFilters() {
  console.log('Applied Filters:', {
    sort: selectedSort.value,
    priceRange: priceRange.value,
    delivery: selectedDelivery.value
  });
}
</script>

<style scoped>
.filter-bar {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* 최대 너비를 설정하여 세로 정렬 유지 */
}

.filter-section {
  margin-bottom: 20px;
}

.filter-section h3 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
}

.filter-options {
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 10px;
}

.filter-options button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.filter-options button.selected {
  border-color: #007bff;
  background-color: #e7f3ff;
}

.price-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.apply-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}
</style>