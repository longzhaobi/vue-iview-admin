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
		},
		async DoFetchRoleAuth({dispatch}, payload) {
			const {roleId, pid} = payload
			const resource = await api.fetchResources();//获取资源
      		const columns = await api.fetchColumns();//获取权限表头
      		if(resource && columns) {
      			const data1 = resource.data;
        		const data2 = columns.data;
        		if(data1 && data2) {
		          if(data1.httpCode === 200 && data2.httpCode === 200) {
		          	const authRes = await api.queryAuth({roleId, pid})
		          	if(authRes) {
		          		const data3 = authRes.data
		          		if(data3 && data3.httpCode === 200) {
		          			const authData = data3.data
		          			const treeData = data1.data
		          			const colsData = data2.data
		          			return {authData, treeData, colsData}
		          		} 
		          	}
		          }
		        }
      		}
      		return null
		},

	}
}

export default role;
