<template>
  <main>
    <div class="container-fluid px-4">
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Area Chart Example
            </div>
            <div class="card-body"><BarChart></BarChart></div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>

        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Area Chart Example
            </div>
            <div class="card-body"><DonutChart></DonutChart></div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>
</main>
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
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
