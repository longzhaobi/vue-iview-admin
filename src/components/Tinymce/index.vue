<script>
	export default {
		name:'Tinymce',
		data() {
			return {
				height: document.documentElement.clientHeight - 505,
				hasChange: false,
	        	hasInit: false
			}
		},
		props: {
			id: {
				type: String,
				default: 'tinymceEditor'
			},
			value: {
	          type: String,
	          default: ''
	        },
	        customButton: {
	          type: Array,
	          required: false,
	          default() {
	            return ['editorAudio', 'editorImage']
	          }
	        },
	        toolbar: {
	          type: Array,
	          required: false,
	          default() {
	            return ['removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code', 'bold italic blockquote | h2 p  media link | alignleft aligncenter alignright']
	          }
	        },
	        menubar: {
	          default: ''
	        }
		},
		watch: {
	        value(val) {
	          if (!this.hasChange && this.hasInit) {
	          	console.log(123)
	            this.$nextTick(() => tinymce.get(this.id).setContent(val))
	          }
	        }
	    },
		mounted () {
			window.onresize = () => {
		        this.height = document.documentElement.clientHeight - 505
		    }
		    const _this = this;
			tinymce.init({
	          selector: `#${this.id}`,
	          height: this.height,
	          body_class: 'panel-body ',
	          object_resizing: false,
	          toolbar: this.toolbar,
	          menubar: this.menubar,
	          plugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools,watermark',
	          end_container_on_empty_block: true,
	          powerpaste_word_import: 'clean',
	          code_dialog_height: 450,
	          code_dialog_width: 1000,
	          advlist_bullet_styles: 'square',
	          advlist_number_styles: 'default',
	          block_formats: '普通标签=p;小标题=h2;',
	          imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
	          imagetools_toolbar: 'watermark',
	          default_link_target: '_blank',
	          link_title: false, 
	          textcolor_map: [
	            '1482f0', '1482f0',
	            '4595e6', '4595e6'],
	          init_instance_callback: editor => {
	            if (_this.value) {
	              editor.setContent(_this.value)
	            }
	            _this.hasInit = true;
	            editor.on('change', () => {
	              this.hasChange = true;
	              this.$emit('input', editor.getContent({ format: 'raw' }));
	            });
	          },
	          setup(editor) {
	            editor.addButton('h2', {
	              title: '小标题', // tooltip text seen on mouseover
	              text: '小标题',
	              onclick() {
	                editor.execCommand('mceToggleFormat', false, 'h2');
	              },
	              onPostRender() {
	                const btn = this;
	                editor.on('init', () => {
	                  editor.formatter.formatChanged('h2', state => {
	                    btn.active(state);
	                  });
	                });
	              }
	            });
	            editor.addButton('p', {
	              title: '正文',
	              text: '正文',
	              onclick() {
	                editor.execCommand('mceToggleFormat', false, 'p');
	              },
	              onPostRender() {
	                const btn = this;
	                editor.on('init', () => {
	                  editor.formatter.formatChanged('p', state => {
	                    btn.active(state);
	                  });
	                });
	              }
	            });
	          }
	        });
		},
		destroyed() {
	    	tinymce.get(this.id).destroy();
	    }
	}
</script>
<template>
	<div class='tinymce-container editor-container'>
		<textarea class='tinymce-textarea' :id="id"></textarea>
		<p></p>
	</div>
</template>