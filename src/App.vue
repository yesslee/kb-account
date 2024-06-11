<template>
  <div class="container">
    <Navigator></Navigator>
    <router-view></router-view>
    <!-- <div class="row"> -->
    <!-- <div class="col"><FilterBar></FilterBar></div>
      <div class="col"><router-view></router-view></div>
    </div> -->
  </div>
</template>

<script setup>
import Navigator from "@/components/Navigator.vue";
import FilterBar from "@/components/FilterBar.vue";
</script>

<style scoped></style>
