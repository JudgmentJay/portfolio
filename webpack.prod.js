const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const miniCSSExtractPluginLoader = {
	loader: MiniCssExtractPlugin.loader,
	options: {
		publicPath: '../'
	}
}

const postCSSLoader = {
	loader: 'postcss-loader',
	options: {
		postcssOptions: {
			plugins: [
				[
					'autoprefixer'
				]
			]
		}
	}
}

const cssModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			localIdentName: '[hash:base64]',
		},
	}
}

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: [
					miniCSSExtractPluginLoader,
					'css-loader',
					postCSSLoader,
					'sass-loader'
				],
				include: /src/
			},
			{
				test: /\.module\.scss$/,
				use: [
					miniCSSExtractPluginLoader,
					cssModuleLoader,
					postCSSLoader,
					'sass-loader'
				],
				include: /src/
			}
		]
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
			new CssMinimizerPlugin()
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[fullhash].css',
			chunkFilename: 'css/[id].[fullhash].css'
		})
	]
})
