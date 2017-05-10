<template>
	<UserList :data="data" :current="current" :total="total"></UserList>
</template>
<script>
    import UserList from '@/components/User/UserList'
    export default {
    	name: 'user',
        computed: {
            data() {
                return this.$store.state.user.data
            },
            current() {
                return this.$store.state.user.current
            },
            total() {
                return this.$store.state.user.total
            }
        },
        components: {
            UserList
        },
        beforeRouteEnter: (to, from, next) => {
        	//后端请求数据
        	next(vm => {
        		vm.$store.dispatch('DoFetchUserInfo')
        	})
        }
    }
</script>