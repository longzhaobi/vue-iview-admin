import * as api from '@/api/role'
import cookie from 'js-cookie'
const role = {
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
		async DoFetchRole({commit, state}, payload) {
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
		async DoSaveRole({commit}, payload) {
			return await api.create(payload)
		},
		async DoUpdateRole({commit}, payload) {
			return await api.update(payload)
		},
		async DoRemoveRole({commit}, payload) {
			return await api.remove(payload)
		}
	}
}

export default role;
