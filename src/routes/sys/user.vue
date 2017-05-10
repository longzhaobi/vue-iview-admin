<script>
	import UserList from '@/components/User/UserList'
	export default {
		beforeRouteEnter: (to, from, next) => {
			//后端请求数据
			next(vm => {
				vm.$store.dispatch('DoFetchUserInfo')
			})
		},
		render(h) {
			const {data, current, total, size} = this.$store.state.user

			return (
				<UserList data={data} current={current} total={total} size={size} />
			)
		}
	}
</script>
