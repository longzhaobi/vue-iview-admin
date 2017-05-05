<template>
	<Breadcrumb>
        <Breadcrumb-item href="/" v-for="(item, index) in levelList" :key="item" :href="item.path">{{item.name}}</Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
	export default {
		name: 'Levelbar',
		data() {
			return {
				levelList: null
			}
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter(item => item.name)
				const first = matched[0]
				if(first  && (first.name !== '首页' || first.path !== '')) {
					matched = [{ name: '首页', path: '/' }].concat(matched)
				}
				this.levelList = matched
			}
		},
		created() {
			this.getBreadcrumb()
		},
		watch: {
			$route() {
				this.getBreadcrumb()
			}
		}
	}
</script>