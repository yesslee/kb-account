<template>
  <div>
    <h2>NotFound</h2>
    <p>존재하지 않는 요청 경로: {{ $route.fullPath }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  console.log(route.params);
});
</script>

<style scoped></style>
