<template>
    <div class="normal">
    	<Navbar />
    	<div class="content">
    		<div class="sidebar-container">
    			<Sidebar />
    		</div>
			<Levelbar />
			<AppMain />
    	</div>
    </div>
</template>

<script>
	import Navbar from './Navbar'
	import Sidebar from './Sidebar'
	import AppMain from './AppMain'
	import Levelbar from './Levelbar'
	export default {
		name: 'layout',
		components: {
			Navbar,
			Sidebar,
			Levelbar,
      AppMain
		},
    beforeRouteEnter: (to, from, next) => {
      //每次加载都会进入此处判断登录是否过期
      next(vm => {
        vm.$store.dispatch('DoGetUserInfo').then((response) => {
          if(!response) {
            vm.$router.push({path: '/login'})
            vm.$Message.error('登录已经过期，请重新登录', 2)
          }
        })
      })
    },
    mounted() {

    }
	}
</script>

<style scoped>
	.normal {
		position: relative;
		height: 100%;
		width: 100%;

	}
	.content {
		width:100%;
		height:100%;
		padding-left: 180px;
	}
	.sidebar-container {
		position: fixed;
		width:180px;
		top:60px;
		left:0px;
		bottom:0px;
		z-index:2;
		overflow-x:hidden;
		transition: all .28s ease-out;
	}
</style>
