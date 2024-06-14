<template>
    <br>
    <br>
    <div style="justify-content : center;">
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                <b>최근 월별 수입 및 지출 현황</b>
            </div>
            <div class="card-body"><center><BarChart></BarChart></center></div>
            <!-- <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div> -->
        </div>

        <div class="card mb-4">
            <div class="card-header" >
                <i class="fas fa-chart-area me-1"></i>
                <b>카테고리별 지출 현황</b>
            </div>
            <div class="card-body"><center><DonutChart></DonutChart></center></div>
            <!-- <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div> -->
        </div>
    </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import BarChart from '@/components/BarChart.vue'
import DonutChart from  '@/components/DonutChart.vue'

export default defineComponent({
  name: 'Summary',
  components: {
    BarChart,DonutChart 
  },

})
</script>

<style>
</style>
