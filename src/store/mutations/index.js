const mutations = {
	TOKEN(state, payload) {
		state.token = payload
	},
	USER_INFO(state, payload) {
		state.userInfo = payload
	},
}

export default mutations
