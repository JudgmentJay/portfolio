const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const cssModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			mode: 'local',
			localIdentName: '[path][name]__[local]',
		}
	}
}

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				include: /src/,
				exclude: /\.module\.scss$/
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					cssModuleLoader,
					'sass-loader'
				],
				include: /src/
			}
		]
	}
})
