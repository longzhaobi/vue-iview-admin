<template>
    <div class="normal">
        <component v-bind:is="currentRole"> </component>
    </div>
</template>
<script>
  import MapDashboard from './map/index'
  export default {
    name: 'dashboard',
    data() {
      return {
        currentRole: MapDashboard
      }
    }
  }
</script>

<style scoped>
  .normal {
    height:100%;
  }
</style>
