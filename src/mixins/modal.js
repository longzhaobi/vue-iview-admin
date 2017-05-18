const propsMixin = {
	data() {
		return {
			show: false,
			loading: false
		}
	},
	props: {
        record: {
            type: Object,
            default: function() {
                return {}
            }
        },
        title: {
            type: String,
            default:"未定义"
        },
        option: {
            type: String,
            default: "create"
        }
    },
    computed: {
        dispatch () {
            return this.$store ? this.$store.dispatch : this.$parent.$data.self.$store.dispatch
        },
		row () {
			const o = this.record
			if (o.mtime) delete o.mtime
		    if(o.ctime) delete o.ctime
		    if(o.createId)  delete o.createId
		    if(o.available) delete o.available
		    if(o.salt) delete o.salt
			return o
		},
		content () {
			return this.option === 'create' ? '确定保存吗？' : '确定更新吗？'
		},
		requestUrl () {
			return this.option === 'create' ? `DoSave${this.namespace}` : `DoUpdate${this.namespace}`
		},
		reloadUrl () {
			return `DoFetch${this.namespace}`
		}
    },
	methods: {
		ok () {
			console.log(this.formItem)
			this.$Modal.confirm({
				title: '操作提示',
				content: this.content,
				onOk: () => {
					this.loading = true
					this.dispatch(this.requestUrl, {...this.formItem, id:this.formItem.id_}).then((response) => {
						if(response) {
							const {data} = response
							this.loading = false
							if(data && data.httpCode == 200) {
								this.show = false
								this.dispatch(this.reloadUrl)
							} else {
								this.$Message.error(data.msg ? data.msg : '操作失败')
							}
						}
					})
				},
				onCancel: () => {
					this.loading = false
				}
			});
		},
		onSubmit (param) {
			this.$Modal.confirm({
				title: '操作提示',
				content: this.content,
				onOk: () => {
					this.loading = true
					this.dispatch(this.requestUrl, param).then((response) => {
						if(response) {
							const {data} = response
							this.loading = false
							if(data && data.httpCode == 200) {
								this.show = false
								this.dispatch(this.reloadUrl)
							} else {
								this.$Message.error(data.msg ? data.msg : '操作失败')
							}
						}
					})
				},
				onCancel: () => {
					this.loading = false
				}
			});
		}
	}
}

export default propsMixin
