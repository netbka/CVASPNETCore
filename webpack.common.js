import webpack from 'webpack';
import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


export default {
	//devtool: 'inline-source-map',
	entry: {
		vendor: path.resolve(__dirname, './src/vendor'),
		main: path.resolve(__dirname, './src/index')
	},
	target: 'web',

	plugins: [new CleanWebpackPlugin(['dist/*.*'], {
		root: __dirname,
		exclude: [''],
		verbose: true,
		dry: false
	}),
	new webpack.LoaderOptionsPlugin({ debug: true, noInfo: false, }),
	new webpack.ProvidePlugin({
		$: 'jquery', jQuery: 'jquery',
	}),
	//Use CommonsChunkPlugin to create seperate bunde  
	//of vendor libs so they're cached separately
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'  // same as in entry
	}),
		//remove duplications
		//new webpack.optimize.DedupePlugin(),

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
