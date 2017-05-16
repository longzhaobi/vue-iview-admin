<script>
	import List from '@/components/Resource/List'
	export default {
    name: 'Resource',
		beforeRouteEnter: (to, from, next) => {
			//后端请求数据
			next(vm => {
				vm.$store.dispatch('DoFetchResource')
			})
		},
		render(h) {
			const {data} = this.$store.state.resource

			return (
					<List treeData={data}/>
			)
		}
	}
</script>
