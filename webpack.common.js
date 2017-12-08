import webpack from 'webpack';
import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


export default {
	//devtool: 'inline-source-map',
	stats: { modules: false },
	entry: {
		main: path.resolve(__dirname, './ClientApp/startup.dev')
	},
	target: 'web',

	plugins: [new CleanWebpackPlugin(['wwwroot'], {
		root: __dirname,
		exclude: ['favicon.ico','dist'],
		verbose: true,
		dry: false
	}),
	new webpack.LoaderOptionsPlugin({ noInfo: false, debug:true}),
	new webpack.ProvidePlugin({
		$: 'jquery', jQuery: 'jquery',
	}),
	

	],
	module: {
		rules: [
			{ test: /\.vue$/, loader: 'vue-loader', options: { hotReload: true, css: 'css-loader', scss: 'css-loader|sass-loader' } },
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{ test: /\.(jpg|jpeg|gif|png|svg|woff|woff2|eot|ttf|otf)$/, loader: 'url-loader?limit=50000' },
			{ test: /\.(ico)$/, loader: 'file-loader?name=[name].[ext]' },
			{ test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }) },
			{ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
			{ enforce: "pre", test: /(\.js$)|(\.vue$)/, loader: "eslint-loader", exclude: /node_modules/ }
		]
	}
};
