<template>
    <div class="normal">
        <component v-bind:is="currentRole"> </component>
    </div>
</template>
<script>
  import EditorDashboard from './editor/index';
  export default {
    name: 'dashboard',
    data() {
      return {
        currentRole: EditorDashboard
      }
    }
  }
</script>
