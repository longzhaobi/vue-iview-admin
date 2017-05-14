<script>
	import List from '@/components/Permission/List'
	export default {
    name: 'Resource',
		beforeRouteEnter: (to, from, next) => {
			//后端请求数据
			next(vm => {
				vm.$store.dispatch('DoFetchPermission')
			})
		},
		render(h) {
			const {data, current, total, size} = this.$store.state.resource

			return (
				<List data={data} current={current} total={total} size={size}/>
			)
		}
	}
</script>
