const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				include: /src/
			}
		]
	},
	mode: 'development',
	/* Comment out devServer if you don't need to proxy */
	devServer: {
		proxy: [{
			context: ['/proxy', '/bookmarks'],
			target: 'http://localhost:3010',
		}]
	}
})
