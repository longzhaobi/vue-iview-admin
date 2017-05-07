<template>
	<Menu class="menu" active-name="1-2" width="auto" theme="dark" :open-names="['1']">
		<a class="switchBar"><Icon type="navicon-round"></Icon></a>
		<Submenu v-for="menu in menus" :name="menu.name" :key="menu.id_">
	      <template slot="title">
	          <Icon type="ios-keypad"></Icon>
	          {{menu.name}}
	      </template>
	      <Menu-item v-for="c in menu.children" :name="c.name" :key="c.id_"> {{c.name}}</Menu-item>
	  </Submenu>
	  <!-- <Submenu name="1">
	      <template slot="title">
	          <Icon type="ios-navigate"></Icon>
	          导航一
	      </template>
	      <Menu-item name="1-1">选项 1</Menu-item>
	      <Menu-item name="1-2">选项 2</Menu-item>
	      <Menu-item name="1-3">选项 3</Menu-item>
	  </Submenu>
	  <Submenu name="2">
	      <template slot="title">
	          <Icon type="ios-keypad"></Icon>
	          导航二
	      </template>
	      <Menu-item name="2-1">选项 1</Menu-item>
	      <Menu-item name="2-2">选项 2</Menu-item>
	  </Submenu>
	  <Submenu name="3">
	      <template slot="title">
	          <Icon type="ios-analytics"></Icon>
	          导航三
	      </template>
	      <Menu-item name="3-1">选项 1</Menu-item>
	      <Menu-item name="3-2">选项 2</Menu-item>
	  </Submenu> -->
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
		text-align: center;
		color: #efefef;
		font-size:12px;
		cursor: pointer;
		background-color: rgb(57,69,85);
	}
</style>
