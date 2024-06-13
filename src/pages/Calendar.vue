<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">이전</button>
      <span>{{ monthNames[currentMonth.value] }} {{ currentYear.value }}</span>
      <button @click="nextMonth">다음</button>
    </div>
    <div class="calendar-body">
      <div class="calendar-row">
        <div class="calendar-day" v-for="day in dayNames" :key="day">{{ day }}</div>
      </div>
      <div class="calendar-row" v-for="(week, index) in weeks" :key="index">
        <div
          class="calendar-cell"
          v-for="day in week"
          :key="day.date ? day.date.toISOString() : index"
          :class="{ 'calendar-cell--empty': !day.isCurrentMonth }"
        >
          <div class="date">{{ day.date ? day.date.getDate() : "" }}</div>
          <div class="income" v-if="day.isCurrentMonth && day.date && getIncome(day.date)">
            {{ getIncome(day.date) }}
          </div>
          <div class="expense" v-if="day.isCurrentMonth && day.date && getExpense(day.date)">
            {{ getExpense(day.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed,defineProps } from "vue";
import { useTransactionStore } from "@/stores/transactions.js";

const props = defineProps({
  month: {
    type: String,
    required: true
  }
});
console.log("calcal",props.month);

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const transactionStore = useTransactionStore();
const transactions = computed(() => transactionStore.totalTransactionList);

const weeks = computed(() => {
  const startOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const endOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);

  const weeks = [];
  let currentWeek = [];
  let currentDate = new Date(startOfMonth);

  for (let i = 0; i < startOfMonth.getDay(); i++) {
    currentWeek.push({ date: null, isCurrentMonth: false });
  }

  while (currentDate <= endOfMonth) {
    currentWeek.push({ date: new Date(currentDate), isCurrentMonth: true });

    if (currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: null, isCurrentMonth: false });
    }
    weeks.push(currentWeek);
  }

  return weeks;
});

const getIncome = (date) => {
  const filteredTransactions = transactions.value.filter(
    (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Income"
  );
  const income = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
  return income > 0 ? income : "ㅤ ";
};

const getExpense = (date) => {
  const filteredTransactions = transactions.value.filter(
    (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Pay"
  );
  const expense = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
  return expense > 0 ? expense : "ㅤ";
};

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
};

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
};
</script>

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 5px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fdfdfd;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-row {
  display: contents;
}

.calendar-day, .calendar-cell {
  flex: 1;
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.calendar-day {
  background-color: rgb(192, 205, 240);
  color: black;
  font-weight: bold;
}

.calendar-cell {
  text-align: left;
  background-color: rgb(255, 255, 255);
}

.calendar-cell--empty {
  background-color: hsl(0, 5%, 87%);
  color: #ccc;
}

.date {
  font-weight: bold;
}

.income {
  color: blue;
}

.expense {
  color: red;
}
</style>



<!-- <template> 
  <div class="calendar">
    <div class="calendar-body">
      <div class="calendar-row">
        <div class="calendar-day" v-for="day in dayNames" :key="day">{{ day }}</div>
      </div>
      <div class="calendar-row" v-for="(week, index) in weeks" :key="index">
        <div
          class="calendar-cell"
          v-for="day in week"
          :key="day.date ? day.date.toISOString() : index"
          :class="{ 'calendar-cell--empty': !day.isCurrentMonth }"
        >
          <div class="date">{{ day.date ? day.date.getDate() : "" }}</div>
          <div class="income" v-if="day.isCurrentMonth && day.date && getIncome(day.date)">
            {{ getIncome(day.date) }}
          </div>
          <div class="expense" v-if="day.isCurrentMonth && day.date && getExpense(day.date)">
            {{ getExpense(day.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTransactionStore } from "@/stores/transactions.js";

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const transactionStore = useTransactionStore();
const transactions = computed(() => transactionStore.transactionList);

const weeks = computed(() => {
  const startOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const endOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);

  const weeks = [];
  let currentWeek = [];
  let currentDate = new Date(startOfMonth);

  for (let i = 0; i < startOfMonth.getDay(); i++) {
    currentWeek.push({ date: null, isCurrentMonth: false });
  }

  while (currentDate <= endOfMonth) {
    currentWeek.push({ date: new Date(currentDate), isCurrentMonth: true });

    if (currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: null, isCurrentMonth: false });
    }
    weeks.push(currentWeek);
  }

  return weeks;
});

const getIncome = (date) => {
  const filteredTransactions = transactions.value.filter(
    (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Income"
  );
  const income = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
  return income > 0 ? income : "ㅤ ";
};

const getExpense = (date) => {
  const filteredTransactions = transactions.value.filter(
    (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Pay"
  );
  const expense = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
  return expense > 0 ? expense : "ㅤ";
};
</script>

<style scoped>
.calendar {
  max-width: 400px 600px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 5px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fdfdfd;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-row {
  display: contents;
}
.calendar-day {
  padding: 20px;
  text-align: center;
  border: 0.1px solid #000000;
  background-color: rgb(192, 205, 240);
  position: relative;
  color: white;
}

.calendar-cell {
  padding: 10px;
  text-align: left;
  font-style: normal;
  border: 1px solid #000000;
  background-color: rgb(255, 255, 255);
  position: relative;
}

.calendar-cell--empty {
  background-color: hsl(0, 5%, 87%);
  color: #ccc;
}

.date {
  font-weight: bold;
}

.income {
  color: blue;
}

.expense {
  color: red;
}
</style>-->