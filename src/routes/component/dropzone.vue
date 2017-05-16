<template>
  <div class="normal">
    <p><Alert>组件地址：https://github.com/rowanwins/vue-dropzone</Alert></p>
    <div class="box-image-upload">
    	<dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
        <input type="hidden" name="token" value="xxx">
    </dropzone>
    </div>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone'

  export default {
    name: 'AvatarUpload',
    components: {
      Dropzone
    },
    methods: {
      'showSuccess': function (file) {
        console.log('A file was successfully uploaded')
      }
    }
  }
</script>

<style scoped>
	.normal {
		padding:50px;
	}
</style>