<template>
    <div class="normal">
    	<Navbar />
    	<div class="content">
    		<div class="sidebar-container">
    			<Sidebar />
    		</div>
    	</div>
    </div>
</template>

<script>
	import Navbar from './Navbar'
	import Sidebar from './Sidebar'
	export default {
		name: 'layout',
		components: {
			Navbar,
			Sidebar
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.normal {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;

		.content {
			width:100%;
			height:100%;
			padding-left: 180px;
			.sidebar-container {
				position: fixed;
				width:180px;
				top:60px;
				left:0px;
				bottom:0px;
				z-index:2;
				overflow-x:hidden;
				transition: all .28s ease-out;
            	@include scrollBar;
			}
		}

	}
</style>
