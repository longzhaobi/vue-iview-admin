<template>
  	<div class="normal">
		<Button type="info" @click="toggleShow">点击我上传头像</Button>
		<ImageUpload field="img"
	        @crop-success="cropSuccess"
	        @crop-upload-success="cropUploadSuccess"
	        @crop-upload-fail="cropUploadFail"
	        v-model="show"
			:width="300"
			:height="300"
			url="https://httpbin.org/post"
			:params="params"
			:headers="headers"
			img-format="png"></ImageUpload>
		<img :src="imgDataUrl">
	</div>
</template>

<script>
  	import 'babel-polyfill'; // es6 shim
	import Vue from 'vue';
	import ImageUpload from 'vue-image-crop-upload/upload-2.vue';
	export default {
		data () {
			return {
				show: false,
				params: {
					token: '123456798',
					name: 'avatar'
				},
				headers: {
					smail: '*_~'
				},
				imgDataUrl: '' // the datebase64 url of created image
			}
		},
		components: {
			ImageUpload
		},
		methods: {
			toggleShow() {
				this.show = !this.show;
			},
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.imgDataUrl = imgDataUrl;
			},
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
		}
	}
</script>

<style scoped>
	.normal {
		padding:50px;
	}
</style>