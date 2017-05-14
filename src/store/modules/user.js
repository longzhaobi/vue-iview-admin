import * as api from '@/api/user'
import cookie from 'js-cookie'
const user = {
	state: {
		user: '',
		menus:[],
		data: [],
		total: 0,
	    current: 1,
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
		SET_DATA: (state, { data, total, current, size }) => {
			state.data = data
			state.current = current
			state.total = total
			state.size = size
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
		async DoFetchUser({commit, state}, payload) {
			const params = {
				current:state.current,
				size:state.size,
				...payload
			}
			const response = await api.fetch(params)
			if(response) {
				const {data} = response;
		        if(data) {
		          const {total, current, size} = data;
		          commit('SET_DATA', {data:data.data, total, current, size})
		        }
			}
		},
		async DoSaveUser({commit}, payload) {
			return await api.create(payload)
		},
		async DoUpdateUser({commit}, payload) {
			return await api.update(payload)
		},
		async DoRemoveUser({commit}, payload) {
			return await api.remove(payload)
		},
		async DoFetchRoles({commit}, payload) {
			return await api.fetchRoles()
		},
		async DoAuthUserInfo({commit}, {id, role}) {
			return await api.auth(id, {roleIds:role})
		}
	}
}

export default user;
