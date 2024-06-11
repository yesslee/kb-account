<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">이전</button>
      <div>{{ monthNames[currentMonth.value] }} {{ currentYear.value }}</div>
      <button @click="nextMonth">다음</button>
    </div>
    <div class="calendar-body">
      <div class="calendar-row">
        <div class="calendar-cell" v-for="day in dayNames" :key="day">{{ day }}</div>
      </div>
      <div class="calendar-row" v-for="(week, index) in weeks" :key="index">
        <div
          class="calendar-cell"
          v-for="day in week"
          :key="day.date"
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

<script>
import { ref, computed } from "vue";
import axios from 'axios'

    const transactionsUrl="http://undefined:3001/transactionList"
    const money=ref([]);

    const requestAPI = async () => {
      try {
        const response=await axios.get(transactionList);
        money.value = response.price;
      }
    }
export default {
  setup() {

    const currentYear = ref(new Date().getFullYear());
    const currentMonth = ref(new Date().getMonth());
    const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const transactions = getTransactions();

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

      while (currentWeek.length < 7) {
        currentWeek.push({ date: null, isCurrentMonth: false });
      }
      weeks.push(currentWeek);

      return weeks;
    });

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };


    // const getIncome = (date) => {
    //   const filteredTransactions = transactions.filter(
    //     (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Income"
    //   );
    //   const income = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
    //   return income > 0 ? income : "";
    // };

    // const getExpense = (date) => {
    //   const filteredTransactions = transactions.filter(
    //     (t) => new Date(t.date).toDateString() === date.toDateString() && t.type === "Pay"
    //   );
    //   const expense = filteredTransactions.reduce((sum, t) => sum + parseInt(t.price, 10), 0);
    //   return expense > 0 ? expense : "";
    // };

    return {
      currentYear,
      currentMonth,
      dayNames,
      monthNames,
      weeks,
      prevMonth,
      nextMonth,
      getIncome,
      getExpense,
    };
  },
};
</script>

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-row {
  display: contents;
}

.calendar-cell {
  padding: 10px;
  text-align: center;
  border: 1px solid #eee;
  position: relative;
}

.calendar-cell--empty {
  background-color: #f9f9f9;
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

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-row {
  display: contents;
}

.calendar-cell {
  padding: 10px;
  text-align: center;
  border: 1px solid #eee;
  position: relative;
}

.calendar-cell--empty {
  background-color: #f9f9f9;
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
