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

  	import store from '@/store';
    import router from '@/router';	
	export default {
		name: 'layout',
		components: {
			Navbar,
			Sidebar,
			Levelbar,
      		AppMain
		}
	}
</script>

<style scoped>
	.normal {
		position: relative;
		height: 100%;
		width: 100%;

	}
	.normal:after {
	    content: "";
	    display: table;
	    clear: both;
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
