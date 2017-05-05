const user = {
	state: {
		user: '',
		roles: []
	},

	mutations: {
		SET_ROLES: (state, roles) => {
			state.roles = roles
		},
		SET_USER: (state, user) => {
			state.user = user
		}
	}
}

export default user;