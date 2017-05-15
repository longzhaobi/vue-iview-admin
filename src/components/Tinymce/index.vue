<script>
	export default {
		name:'Tinymce',
		props: {
			id: {
				type: String,
				default: 'tinymceEditor'
			}
		},
		mounted () {
			tinymce.init({
				selector: `#${this.id}`,
			})
		}
	}
</script>
<template>
	<div class='tinymce-container editor-container'>
		<textarea class='tinymce-textarea' :id="id"></textarea>
	</div>
</template>