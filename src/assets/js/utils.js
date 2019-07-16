// 判断是否为生产环境
export const isDev = process.env.NODE_ENV === 'development'
// 获取url传参
export const getQuery = () => {
	let query = location.search.trim()
	if (!query) return false
	query = query.slice(1)
	const queryArr = query.split('&')
	let queryObj = {}
	for (const item of queryArr) {
		let [key, val] = item.split('=')
		queryObj[key] = val
	}
	return queryObj
}
