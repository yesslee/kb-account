<template>
  <div class="item">
    <p>ID: {{ transactionItem.id }}</p>
    <p>회원 ID: {{ transactionItem.memberId }}</p>
    <span>날짜: {{ transactionItem.date }}</span>
    <p>금액: {{ transactionItem.price }}</p>
    <p>카테고리: {{ transactionItem.category }}</p>
    <p>유형: {{ transactionItem.type }}</p>
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

// const router = useRouter();
// const memberStore = useMemberStore();
// const transactionStore = useTransactionStore();

// const { deleteTransaction } = transactionStore;


</script>
