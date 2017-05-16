<template>
  <div class="components-container">
      <MdEditor  id='contentEditor' ref="contentEditor" v-model='content' :height="300" :zIndex='20'></MdEditor>
      <div>{{content}}</div>
    </div>
  </div>
</template>
<script>
    import MdEditor from '@/components/MdEditor';

    export default {
      components: { MdEditor },
      data() {
        return {
          content: 'Simplemde'
        }
      }
    };
</script>


