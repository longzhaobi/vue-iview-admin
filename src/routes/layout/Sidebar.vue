<template>
	<Menu class="menu" active-name="1-2" width="auto" theme="dark" :open-names="['1']">
		<a class="switchBar">系统菜单</a>
		<Submenu v-for="menu in menus" :name="menu.name" :key="menu.id_">
	      <template slot="title">
	          <Icon type="ios-keypad"></Icon>
	          {{menu.name}}
	      </template>
	      <Menu-item v-for="c in menu.children" :name="c.name" :key="c.id_"> 
	      	<router-link :to="c.url">{{c.name}}</router-link>
	      </Menu-item>
	  </Submenu>
  </Menu>
</template>

<script>
	export default {
		name: 'Sidebar',
		computed: {
			menus() {
				return this.$store.getters.menus
			}
		}
	}
</script>
<style scoped>
    .menu {
        min-height: 100%;
    }
    .switchBar {
		height:30px;
		width: 100%;
		display: block;
		line-height: 30px;
		font-weight: bold;
		text-align: center;
		color: #efefef;
		font-size:12px;
		cursor: pointer;
		background-color: rgb(57,69,85);
	}
</style>
