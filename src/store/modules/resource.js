import * as api from '@/api/resource'
import cookie from 'js-cookie'
const resource = {
	state: {
		data: [],
		total: 0,
    current: 1,
    size:20,
    keyword:null
	},

	mutations: {
		SET_DATA: (state, { data, total, current, size }) => {
			state.data = data
			state.current = current
			state.total = total
			state.size = size
		}
	},
	actions: {
		async DoFetchResource({commit, state}, payload) {
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
		async DoSaveResource({commit}, payload) {
			return await api.create(payload)
		},
		async DoUpdateResource({commit}, payload) {
			return await api.update(payload)
		},
		async DoRemoveResource({commit}, payload) {
			return await api.remove(payload)
		}
	}
}

export default resource;
