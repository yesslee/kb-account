<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <h2 class="current-month-year">June 2024</h2>
    </div>
    <div class="calendar-body">
      <div class="calendar-day" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
      <div
        class="calendar-date"
        v-for="date in datesInJune"
        :key="date.date"
        :class="{ 'today': isToday(date.date), 'weekend': isWeekend(date.date) }"
      >
        <span class="date-number">{{ date.date }}</span>
        <div class="event-preview" v-if="date.events.length > 0">
          <div class="event-title" v-for="event in date.events" :key="event.id">
            {{ event.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JuneCalendar',
  data() {
    return {
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datesInJune: [
  { date: 1, events: [{ id: 1, title: '회의' }, { id: 2, title: '생일 파티' }] },
  { date: 2, events: [] },
  { date: 3, events: [{ id: 3, title: '운동' }] },
  { date: 4, events: [] },
  { date: 5, events: [] },
  { date: 6, events: [{ id: 4, title: '영화 보기' }] },
  { date: 7, events: [] },
  { date: 8, events: [] },
  { date: 9, events: [{ id: 5, title: '여행 계획' }] },
  { date: 10, events: [] },
  { date: 11, events: [{ id: 6, title: '미팅' }] },
  { date: 12, events: [] },
  { date: 13, events: [] },
  { date: 14, events: [{ id: 7, title: '가족 모임' }] },
  { date: 15, events: [] },
  { date: 16, events: [] },
  { date: 17, events: [{ id: 8, title: '스포츠 경기' }] },
  { date: 18, events: [] },
  { date: 19, events: [] },
  { date: 20, events: [{ id: 9, title: '콘서트' }] },
  { date: 21, events: [] },
  { date: 22, events: [] },
  { date: 23, events: [{ id: 10, title: '데이트' }] },
  { date: 24, events: [] },
  { date: 25, events: [] },
  { date: 26, events: [{ id: 11, title: '업무 회의' }] },
  { date: 27, events: [] },
  { date: 28, events: [] },
  { date: 29, events: [{ id: 12, title: '친구 모임' }] },
  { date: 30, events: [] }
]
    }
  },
  methods: {
    isToday(date) {
      const today = new Date();
      return today.getDate() === date && today.getMonth() === 5 && today.getFullYear() === 2024;
    },
    isWeekend(date) {
      const day = new Date(2024, 5, date).getDay();
      return day === 0 || day === 6;
    }
  }
}
</script>

<style>
.calendar-container {
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  padding: 2rem;
}

.calendar-header {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.current-month-year {
  font-size: 2rem;
  font-weight: bold;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
}

.calendar-day {
  font-weight: bold;
  text-align: center;
}

.calendar-date {
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.calendar-date.today {
  background-color: #e6f0ff;
}

.calendar-date.weekend {
  color: #888;
}

.event-preview {
  margin-top: 0.5rem;
  text-align: left;
}

.event-title {
  font-size: 0.8rem;
  color: #666;
}
</style>