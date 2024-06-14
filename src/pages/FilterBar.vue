<template>
  <div class="filter-bar">
    <!-- 카테고리 선택 섹션 -->
    <div class="filter-section">
      <h3>카테고리 선택</h3>
      <div class="filter-options">
        <div class="category">
          <label v-for="category in categories" :key="category" class="checkbox-container">
            <input type="checkbox" :value="category" v-model="localSelectedSort" />
            <span class="checkmark"></span>
            {{ category }}
          </label>
        </div>
      </div>
    </div>
    
    <!-- 금액 범위 설정 섹션 -->
    <div class="filter-section">
      <h3>금액 범위 설정</h3>
      <!-- VueSlider 컴포넌트로 금액 범위 설정 -->
      <VueSlider 
        v-model="localPriceRange" 
        :min="0" 
        :max="1000000" 
        :interval="1000" 
        :tooltip="{ placement: 'top', show: true }"
        :marks="marks"
      />
    </div>
    <br>
    <!-- 수입/지출 조회 섹션 -->
    <div class="filter-section">
      <h3>수입 | 지출 조회</h3>
      <div class="filter-options">
        <!-- 단일 선택을 위한 버튼 -->
        <button :class="{'selected': localSelectedDelivery === 'Income'}" @click="selectDelivery('Income')">수입</button>
        <button :class="{'selected': localSelectedDelivery === 'Pay'}" @click="selectDelivery('Pay')">지출</button>
      </div>
    </div>
    <!-- 필터 적용 버튼 -->
    <button class="apply-button" @click="applyFilters">Search!</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

const emit = defineEmits(['filter-category', 'filter-delivery', 'filter-price-range']);

// 필터 선택 상태를 저장하는 로컬 변수
const localSelectedSort = ref([]); // 선택된 카테고리
const localPriceRange = ref([0, 100000]); // 금액 범위
const localSelectedDelivery = ref(''); // 수입 또는 지출

// 카테고리 목록
const categories = ['식비', '카페', '생활', '교통', '쇼핑', '용돈', '여행/숙박', '건강'];

// 슬라이더 마크 설정
const marks = {
  0: '0',
  250000: '250k',
  500000: '500k',
  750000: '750k',
  1000000: '1000k'
};

// 수입/지출 단일 선택 함수
function selectDelivery(delivery) {
  if (localSelectedDelivery.value === delivery) {
    localSelectedDelivery.value = ''; // 선택 해제
  } else {
    localSelectedDelivery.value = delivery; // 선택
  }
}

// 필터 적용 함수
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
  max-width: 250px;
  position: sticky;
  top: 120px;
}

.filter-section {
  margin-bottom: 15px;
}

.filter-section h3 {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: bold;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  font-size: 14px;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #007bff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.filter-options button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center;
}

.filter-options button.selected {
  border-color: #007bff;
  background-color: #e7f3ff;
}

.apply-button {
  display: block;
  width: 100%;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.range-values {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
</style>
