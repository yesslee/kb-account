<template>
  <div class="filter-bar">
    <div class="filter-section">
      <h3>카테고리 조회</h3>
      <div class="filter-options">
        <button :class="{'selected': localSelectedSort.includes('식비')}" @click="toggleSort('식비')">식비</button>
        <button :class="{'selected': localSelectedSort.includes('카페')}" @click="toggleSort('카페')">카페</button>
        <button :class="{'selected': localSelectedSort.includes('생활')}" @click="toggleSort('생활')">생활</button>
        <button :class="{'selected': localSelectedSort.includes('교통')}" @click="toggleSort('교통')">교통</button>
        <button :class="{'selected': localSelectedSort.includes('쇼핑')}" @click="toggleSort('쇼핑')">쇼핑</button>
      </div>
    </div>
    
    <div class="filter-section">
      <h3>금액 범위</h3>
      <br>
      <VueSlider v-model="localPriceRange" :min="0" :max="1000000" :interval="1000" />
    </div>
    
    <div class="filter-section">
      <h3>입/출금 조회</h3>
      <div class="filter-options">
        <button :class="{'selected': localSelectedDelivery === 'Income'}" @click="selectDelivery('Income')">입금</button>
        <button :class="{'selected': localSelectedDelivery === 'Pay'}" @click="selectDelivery('Pay')">출금</button>
      </div>
    </div>
    
    <button class="apply-button" @click="applyFilters">Apply</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

const props = defineProps();
const emit = defineEmits(['filter-category', 'filter-delivery', 'filter-price-range']);

const localSelectedSort = ref([]);
const localPriceRange = ref([0, 1000000]);
const localSelectedDelivery = ref('');

function toggleSort(sort) {
  const index = localSelectedSort.value.indexOf(sort);
  if (index > -1) {
    localSelectedSort.value.splice(index, 1);
  } else {
    localSelectedSort.value.push(sort);
  }
}

function selectDelivery(delivery) {
  if (localSelectedDelivery.value === delivery) {
    localSelectedDelivery.value = '';
  } else {
    localSelectedDelivery.value = delivery;
  }
}

function applyFilters() {
  emit('filter-category', localSelectedSort.value);
  emit('filter-delivery', localSelectedDelivery.value);
  emit('filter-price-range', localPriceRange.value);
  console.log('Applied Filters:', {
    sort: localSelectedSort.value,
    priceRange: localPriceRange.value,
    delivery: localSelectedDelivery.value
  });
}
</script>

<style scoped>
.filter-bar {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 250px; /* 크기를 줄이기 위해 max-width를 줄임 */
  position: sticky;
  top: 120px;
}

.filter-section {
  margin-bottom: 15px; /* 섹션 간 간격 줄이기 */
}

.filter-section h3 {
  font-size: 14px; /* 글꼴 크기 줄이기 */
  margin-bottom: 8px; /* 제목과 옵션 간 간격 줄이기 */
  font-weight: bold;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px; /* 옵션 간 간격 줄이기 */
}

.filter-options button {
  padding: 8px 16px; /* 버튼 패딩 줄이기 */
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.filter-options button.selected {
  border-color: #007bff;
  background-color: #e7f3ff;
}

.apply-button {
  display: block;
  width: 100%;
  padding: 8px; /* 버튼 패딩 줄이기 */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px; /* 글꼴 크기 줄이기 */
  text-align: center;
}
</style>
