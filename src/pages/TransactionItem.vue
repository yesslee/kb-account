<template>
  <!-- <div class="item">
    <p>ID: {{ transactionItem.id }}</p>
    <p>회원 ID: {{ transactionItem.memberId }}</p>
    <span>날짜: {{ transactionItem.date }}</span>
    <p>금액: {{ transactionItem.price }}</p>
    <p>카테고리: {{ transactionItem.category }}</p>
    <p>유형: {{ transactionItem.type }}</p>
  </div> -->
 
  <div class="list-group border-0 mx-auto" style="width: 100%;">
  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-2 border-0" aria-current="true">
    <div class="d-flex gap-3 w-100 justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1">
        <span class="badge rounded-pill text-white px-3 py-2 me-3" :style="{ backgroundColor: getCategoryColor(transactionItem.category), width: '120px', 'text-align': 'center' }">
          {{ transactionItem.category }}
        </span>
        <p class="mb-0 flex-grow-1 fs-6 text-start fw-bold" style="margin-left: 80px; color: rgba(0, 0, 0, 0.8); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ transactionItem.title }}</p>
      </div>
      <div class="d-flex align-items-center">
        <small class="fs-6 fw-bold" style="color: rgba(0, 0, 0, 0.7);">{{formatPrice(transactionItem.price, transactionItem.type)}}원</small>
      </div>
    </div>
  </a>
</div>
</template>

<script setup>
// import { computed } from 'vue';
// import { useRouter } from 'vue-router';
// import { useMemberStore} from '@/stores/transactions.js'
// import { useTransactionStore} from '@/stores/transactions.js'

defineProps({
	transactionItem: { Type: Object, required:true }
})


function getCategoryColor(category) {
    // 카테고리에 따른 배경색 매핑
    const categoryColors = {
      '술': '#4CAF50',
      '교통': '#32d3e5',
      '생활': '#2196F3',
      '건강': '#E91E63',
      '쇼핑' : '#ffaae8',
      '용돈' : '#eded1b'
      // 추가적인 카테고리와 색상 매핑
    };

    return categoryColors[category] || '#000000'; // 매핑되지 않은 카테고리의 경우 기본 검정색
}

// function formatPrice(value) {
//   return value.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
// }

function formatPrice(value, type) {
  const formattedPrice = Number(value).toLocaleString();
  
  // 가격 유형에 따라 +/- 기호 붙이기
  const sign = type === 'Income' ? '+' : '-';
  
  return `${sign}${formattedPrice}`;
}
// const router = useRouter();
// const memberStore = useMemberStore();
// const transactionStore = useTransactionStore();

// const { deleteTransaction } = transactionStore;


</script>

<style scoped>
.ex {
  background-color: #32d3e5;
}
</style>