<script>
	import List from '@/components/User/List'
	export default {
		name: 'User',
		beforeRouteEnter: (to, from, next) => {
			//后端请求数据
			next(vm => {
				vm.$store.dispatch('DoFetchUser')
			})
		},
		render(h) {
			const {data, current, total, size} = this.$store.state.user

			return (
				<List data={data} current={current} total={total} size={size} />
			)
		}
	}
</script>
