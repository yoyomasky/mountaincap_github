import Axios from 'axios'

Axios.defaults.timeout = 6000

Axios.interceptors.request.use(
	config => {
		return config
	},
	err => {
		return Promise.resolve({ _err: err.toString() })
	}
)

Axios.interceptors.response.use(
	data => {
		return data
	},
	err => {
		return Promise.resolve({ _err: err.toString() })
	}
)

export default Axios
