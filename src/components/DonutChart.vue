<template>
  <div style="width: 400px">
    <label for="month-select">Select Month : </label>
    <select id="month-select" class="form-select" v-model="selectedMonth" >
      <option v-for="month in months" :key="month.value" :value="month.value">{{ month.text }}</option>
    </select>
    <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      @click="onChartClick"
    />
  </div>
  <div v-if="selectedLabelData.length > 0">
    <h3>{{ selectedMonth }}월의 {{ selectedLabel }} 지출 내역:</h3>
    <table class="table" style ="width:70%" >
      <thead class="thead-dark">
        <tr>
          <th scope="col">날짜</th>
          <th scope="col">내역</th>
          <th scope="col">가격</th>
          <!-- <th scope="col">Handle</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedLabelData" :key="index">
          <th >{{item.date}}</th>
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTransactionStore } from '@/stores/transactions.js'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DonutChart',
  components: { Doughnut },
  setup() {
    const route = useRoute()
    const id = ref(null)
    const transactionStore = useTransactionStore();
    const transactionList = computed(() => transactionStore.totalTransactionList);
    const selectedMonth = ref(new Date().getMonth() + 1) // 현재 월로 초기화
    let selectedLabel = ref('')
    const selectedLabelData = ref([])

    const categoryColors = {
      '식비': '#4CAF50',
      '교통': '#6c8a00',
      '생활': '#2196F3',
      '카페': '#E91E63',
      '쇼핑' : '#ffaae8',
      '용돈' : '#eded1b',
      '여행/숙박' : '#b3b7ff' ,
      '건강' : '#20aed8'

      // 추가적인 카테고리와 색상 매핑
    };


    const months = [
      { value: 1, text: '1월' },
      { value: 2, text: '2월' },
      { value: 3, text: '3월' },
      { value: 4, text: '4월' },
      { value: 5, text: '5월' },
      { value: 6, text: '6월' },
      { value: 7, text: '7월' },
      { value: 8, text: '8월' },
      { value: 9, text: '9월' },
      { value: 10, text: '10월' },
      { value: 11, text: '11월' },
      { value: 12, text: '12월' },
    ]

    const chartData = computed(() => {
      const transactions = transactionList.value.filter(transaction => {
        const date = new Date(transaction.date)
        return transaction.memberId === 'dh1010a' && (date.getMonth() + 1) === selectedMonth.value
      })

      // 카테고리별로 데이터 집계
      const categoryData = {};
      let tmps = Object.keys(categoryColors);
      tmps.forEach(tmp => {
        categoryData[tmp] = "";
      });
      
      transactions.forEach(transaction => {
        const category = transaction.category
        const price = parseFloat(transaction.price)
        if (categoryData[category]) {
          categoryData[category] += price
        } else {
          categoryData[category] = price
        }
      })

      // 카테고리와 데이터 배열로 변환
      const labels = Object.keys(categoryData)
      const data = Object.values(categoryData)
      const backgroundColor = labels.map(label => categoryColors[label] || '#aea1d6')

      return {
        labels: labels,
        datasets: [
          {
            backgroundColor: backgroundColor.slice(0, labels.length),
            data: data
          }
        ],
        categoryData
      }
    })

    const onChartClick = (event, elements) => {
      if (elements.length > 0) {
        // const chart = elements[0]._chart;
        const index = elements[0].index;
        const label = Object.keys(categoryColors)[index];
        console.log("label",label)
        selectedLabel.value = label;
        selectedLabelData.value = transactionList.value.filter(transaction => {
          const date = new Date(transaction.date)
          return transaction.category === label && transaction.memberId === 'dh1010a' && (date.getMonth() + 1) === selectedMonth.value
        });
      }
    }

    const chartOptions = {
      responsive: true,
      // maintainAspectRatio: false,
      onClick: onChartClick
    }

    return {
      selectedMonth,
      months,
      chartData,
      chartOptions,
      selectedLabel,
      selectedLabelData
    }
  }
}
</script>

<style type="text/css">
body{margin-top:20px;
  background:#eee;
  color:#284866!important;
}

.white-bg {
  background-color: #ffffff;
}
.page-heading {
  border-top: 0;
  padding: 0 10px 20px 10px;
}

.forum-post-container .media {
  margin: 10px 10px 10px 10px;
  padding: 20px 10px 20px 10px;
  border-bottom: 1px solid #f1f1f1;
}
.forum-avatar {
  float: left;
  margin-right: 20px;
  text-align: center;
  width: 110px;
}
.forum-avatar .img-circle {
  height: 48px;
  width: 48px;
}
.author-info {
  color: #676a6c;
  font-size: 11px;
  margin-top: 5px;
  text-align: center;
}
.forum-post-info {
  padding: 9px 12px 6px 12px;
  background: #f9f9f9;
  border: 1px solid #f1f1f1;
}
.media-body > .media {
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #f1f1f1;
}
.forum-post-container .media-body .photos {
  margin: 10px 0;
}
.forum-photo {
  max-width: 140px;
  border-radius: 3px;
}
.media-body > .media .forum-avatar {
  width: 70px;
  margin-right: 10px;
}
.media-body > .media .forum-avatar .img-circle {
  height: 38px;
  width: 38px;
}
.mid-icon {
  font-size: 66px;
}
.forum-item {
  margin: 10px 0;
  padding: 10px 0 20px;
  border-bottom: 1px solid #f1f1f1;
}
.views-number {
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
}
.forum-container,
.forum-post-container {
  padding: 30px !important;
}
.forum-item small {
  color: #999;
}
.forum-item .forum-sub-title {
  color: #999;
  margin-left: 50px;
}
.forum-title {
  margin: 15px 0 15px 0;
}
.forum-info {
  text-align: center;
}
.forum-desc {
  color: #999;
}
.forum-icon {
  float: left;
  width: 30px;
  margin-right: 20px;
  text-align: center;
}
a.forum-item-title {
  color: inherit;
  display: block;
  font-size: 18px;
  font-weight: 600;
}
a.forum-item-title:hover {
  color: inherit;
}
.forum-icon .fa {
  font-size: 30px;
  margin-top: 8px;
  color: #9b9b9b;
}
.forum-item.active .fa {
  color: #1ab394;
}
.forum-item.active a.forum-item-title {
  color: #1ab394;
}
@media (max-width: 992px) {
  .forum-info {
    margin: 15px 0 10px 0;
    /* Comment this is you want to show forum info in small devices */
    display: none;
  }
  .forum-desc {
    float: none !important;
  }
}





.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}
.ibox.collapsed .ibox-content {
  display: none;
}
.ibox.collapsed .fa.fa-chevron-up:before {
  content: "\f078";
}
.ibox.collapsed .fa.fa-chevron-down:before {
  content: "\f077";
}
.ibox:after,
.ibox:before {
  display: table;
}
.ibox-title {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #ffffff;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 3px 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}
.ibox-footer {
  color: inherit;
  border-top: 1px solid #e7eaec;
  font-size: 90%;
  background: #ffffff;
  padding: 10px 15px;
}

.message-input {
  height: 90px !important;
}
.form-control, .single-line {
  background-color: #FFFFFF;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 14px;
}
.text-navy {
  color: #1ab394;
}
.mid-icon {
  font-size: 66px !important;
}
.m-b-sm {
  margin-bottom: 10px;
}
</style>
