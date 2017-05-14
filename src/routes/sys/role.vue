<script>
	import List from '@/components/Role/List'
	export default {
    name: 'Role',
		beforeRouteEnter: (to, from, next) => {
			//后端请求数据
			next(vm => {
				vm.$store.dispatch('DoFetchRole')
			})
		},
		render(h) {
			const {data, current, total, size} = this.$store.state.role
			return (
				<List data={data} current={current} total={total} size={size} />
			)
		}
	}
</script>
