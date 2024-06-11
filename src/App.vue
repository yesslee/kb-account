<script>
import Navigator from './components/Navigator.vue'

export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<template>
  <div id="app">
    <Navigator />
    
    <router-view />
  </div>
</template>

<style scoped>

</style>
