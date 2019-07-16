module.exports = {
	devServer: {
		port: 8085,
		host: 'localhost',
		https: false,
		open: true,
		proxy: {
			'/api': {
				target: 'https://api.serve.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
}
