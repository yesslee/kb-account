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
      <!-- vue-slider를 사용하여 금액 범위를 선택 -->
      <vue-slider v-model="localPriceRange" :min="0" :max="1000000" :interval="1000" tooltip="always" />
    </div>
    
    <div class="filter-section">
      <h3>입/출금 조회</h3>
      <div class="filter-options">
        <button :class="{'selected': localSelectedDelivery === 'Income'}" @click="selectDelivery('Income')">입금</button>
        <button :class="{'selected': localSelectedDelivery === 'Pay'}" @click="selectDelivery('Pay')">출금</button>
      </div>
    </div>
    
    <!-- Apply 버튼 클릭 시 선택된 필터를 부모 컴포넌트로 전달 -->
    <button class="apply-button" @click="applyFilters">Apply</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

// props 및 emit 정의
const props = defineProps();
const emit = defineEmits(['filter-category', 'filter-delivery', 'filter-price-range']);

// 로컬 상태 정의
const localSelectedSort = ref([]);
const localPriceRange = ref([0, 1000000]);
const localSelectedDelivery = ref('');

// 카테고리 필터 토글
function toggleSort(sort) {
  const index = localSelectedSort.value.indexOf(sort);
  if (index > -1) {
    localSelectedSort.value.splice(index, 1);
  } else {
    localSelectedSort.value.push(sort);
  }
}

// 입출금 필터 선택/해제
function selectDelivery(delivery) {
  if (localSelectedDelivery.value === delivery) {
    localSelectedDelivery.value = '';
  } else {
    localSelectedDelivery.value = delivery;
  }
}

// Apply 버튼 클릭 시 모든 필터를 부모 컴포넌트로 전달
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
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* 최대 너비를 설정하여 세로 정렬 유지 */
  position: sticky; /* FilterBar를 고정 위치로 설정 */
  top: 20px; /* 상단에서 20px 떨어진 위치에 고정 */
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
