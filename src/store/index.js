import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters'

import user from './modules/user'
import permission from './modules/permission'
import role from './modules/role'
import resource from './modules/resource'
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		user,
		permission,
		role,
		resource
	},
	getters
})

export default store;
