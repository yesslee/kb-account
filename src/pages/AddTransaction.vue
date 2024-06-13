<template>
  <div class="container">
    <h2>추가하기</h2>
    <form @submit.prevent="addTransaction">
      <div class="form-group">
        <label for="date">날짜</label>
        <input v-model="newTransaction.date" type="date" id="date" required />
      </div>
      <div class="form-group">
        <label for="category">카테고리</label>
        <select v-model="newTransaction.category" id="category" required>
          <option disabled value="">카테고리를 골라주세요</option>
          <option>여행/숙박</option>
          <option>교통</option>
          <option>식비</option>
          <option>교육/학습</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">제목</label>
        <input v-model="newTransaction.title" type="text" id="title" required />
      </div>
      <div class="form-group">
        <label for="price">금액</label>
        <input v-model="newTransaction.price" type="text" id="price" required />
      </div>
      <!-- <div class="form-group">
        <label for="memo">메모</label>
        <input v-model="newTransaction.memo" type="text" id="memo" required />
      </div> -->
      <div class="form-group">
        <label>유형</label>
        <div class="slide-button">
          <button type="button" :class="{ active: newTransaction.type === 'Income' }" @click="setType('Income')">
            수입
          </button>
          <button type="button" :class="{ active: newTransaction.type === 'Pay' }" @click="setType('Pay')">지출</button>
          <div
            class="slider"
            :class="{ income: newTransaction.type === 'Income', pay: newTransaction.type === 'Pay' }"
          ></div>
        </div>
      </div>
      <div class="form-group button-group">
        <button type="button" @click="cancel">Cancel</button>
        <button type="submit">Finish</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useTransactionStore } from "@/stores/transactions";

const newTransaction = ref({
  memberId: "dh1010a",
  date: "",
  price: "",
  title: "",
  category: "",
  // memo: "",
  type: "", // 초기값을 빈 문자열로 설정
});

const transactionStore = useTransactionStore();
const addTransactionToStore = transactionStore.addTransaction;

const router = useRouter();

const setType = (type) => {
  newTransaction.value.type = type;
};

const cancel = () => {
  router.push("/list");
};

const addTransaction = async () => {
  newTransaction.memberId = "dh1010a";
  console.log(newTransaction.value.date);
  addTransactionToStore(newTransaction.value, () => {
    router.push("/list");
  });
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: calc(100% - 20px);
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
}

button[type="button"] {
  background-color: #f1f1f1;
  color: black;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.slide-button {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  margin-top: 10px;
}

.slide-button button {
  flex: 1;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;
}

.slide-button .slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: #007bff;
  transition: transform 0.3s ease;
  z-index: 0;
}

.slide-button .slider.income {
  transform: translateX(0%);
}

.slide-button .slider.pay {
  transform: translateX(100%);
}

button.active {
  color: white;
  font-weight: bold;
}
</style>
