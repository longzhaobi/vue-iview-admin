<template>
    <div class="editor-container">
    	<Tinymce ref="editor" v-model="content"></Tinymce>
      	<div class='editor-content'>
			{{content}}
    	</div>
    </div>
</template>
<script>
    import Tinymce from '@/components/Tinymce';

    export default {
      components: { Tinymce },
      data() {
        return {
          content: 'Tinymce'
        }
      },
      methods: {

      }
    };
</script>


