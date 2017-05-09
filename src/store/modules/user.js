import * as api from '@/api/user'
import cookie from 'js-cookie'
const user = {
	state: {
		user: '',
		menus:[],
		data: [],
		total: 0,
	    current: 0,
	    size:20,
	    keyword:null
	},

	mutations: {
		SET_USER: (state, user) => {
			state.user = user
		},
		SET_MENUS: (state, menus) => {
			state.menus = menus
		},
		SET_DATA: (state, { data, total, current }) => {
			state.data = data
			state.current = current
			state.total = total
		}
	},
	actions: {
		async DoLogin({ rootState, commit }, payload) {
			return await api.login(payload)
		},
		async DoGetUserInfo({commit}, payload) {
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
		async DoFetchUserInfo({commit}, payload) {
			const response = await api.fetch(payload)
			if(response) {
				const {data} = response;
		        if(data) {
		          const {total, current} = data;
		          commit('SET_DATA', {data:data.data, total, current})
		        }
			}
		}
	}
}

export default user;
