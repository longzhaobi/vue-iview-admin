import * as api from '@/api/resource'
import cookie from 'js-cookie'
const resource = {
	state: {
		data: [],
    keyword:null
	},

	mutations: {
		SET_DATA: (state, { data }) => {
			state.data = data
		}
	},
	actions: {
		async DoFetchResource({commit, state}, payload) {
			const response = await api.fetch(payload)
			if(response) {
				const {data} = response;
		        if(data) {
		          commit('SET_DATA', {data:data.data})
		        }
			}
		},
		async DoSaveResource({commit}, payload) {
			return await api.create(payload)
		},
		async DoUpdateResource({commit}, payload) {
			return await api.update(payload)
		},
		async DoRemoveResource({commit}, payload) {
			return await api.remove(payload)
		},
		async fetchPermission({commit}, payload) {
			return await api.fetchPermission()
		}
	}
}

export default resource;
