<template>
  <div>
    <h2>추가하기</h2>
    <form @submit.prevent="addTransaction">
      <div>
        <label for="date">날짜</label>
        <input v-model="newTransaction.date" type="date" id="date" required />
      </div>
      <div>
        <label for="category">카테고리</label>
        <input v-model="newTransaction.category" type="text" id="category" required />
      </div>
      <div>
        <label for="title">제목</label>
        <input v-model="newTransaction.title" type="text" id="title" required />
      </div>
      <div>
        <label for="price">금액</label>
        <input v-model="newTransaction.price" type="number" id="price" required />
      </div>
      <div>
        <label for="memo">메모</label>
        <input v-model="newTransaction.memo" type="text" id="memo" required />
      </div>
      <div>
        <label for="type">유형</label>
        <button type="button" @click="setType('Income')">수입</button>
        <button type="button" @click="setType('Pay')">지출</button>
      </div>
      <div>
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

const newTransaction = ref({
  date: "",
  category: "",
  title: "",
  price: "",
  memo: "",
  type: "Income",
});

const router = useRouter();

const setType = (type) => {
  newTransaction.value.type = type;
};

const cancel = () => {
  router.push("/list");
};

const addTransaction = async () => {
  try {
    await axios.post("http://localhost:3001/transactionList", newTransaction.value);
    // Reset the form fields after successful submission
    newTransaction.value = {
      date: "",
      category: "",
      title: "",
      price: "",
      memo: "",
      type: "Income",
    };
    router.push("/list");
  } catch (error) {
    console.error("Failed to add transaction:", error);
  }
};
</script>

<style scoped>
/* Add styles to match the provided design */
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

div {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 12px;
  font-size: 16px;
  margin: 8px 0;
}

button[type="button"] {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

button[type="submit"],
button[type="button"] {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover,
button[type="button"]:hover {
  background-color: #0056b3;
}
</style>
