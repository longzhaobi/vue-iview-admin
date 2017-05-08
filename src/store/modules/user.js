import * as api from '@/api/login'
import cookie from 'js-cookie'
const user = {
	state: {
		user: '',
		menus:[],
		list: []
	},

	mutations: {
		SET_USER: (state, user) => {
			state.user = user
		},
		SET_MENUS: (state, menus) => {
			state.menus = menus
		}
	},
	actions: {
		async DoLogin({ rootState, commit }, payload) {
			return await api.login(payload)
		},
		async DoGetInfo({commit}, payload) {
			let token = cookie.get('access_token')//获取cookie中的token
			const response = await api.getUserInfoByToken({token})
			if(response) {
				const {data} = response
				if(data) {
					commit('SET_USER', data)
					let menusStr = localStorage.getItem('has_menus')
					if(menusStr) {
						let menus = JSON.parse(menusStr)
						commit('SET_MENUS', menus)
					}
					return true
				}
			}
			return false
		},
		async DoGetInfoList({commit}, payload) {
			// const response = await api
		}
	}
}

export default user;
