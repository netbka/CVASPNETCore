import merge from 'webpack-merge';
//import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.common.js';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
module.exports = (env) => {
	const isDevBuild = !(env && env.prod);
	const clientBundleOutputDir = './wwwroot/dist';
	const conf = merge(common, {
		devtool: 'inline-source-map',
		output: {
			path: path.resolve(__dirname, './wwwroot'),
			publicPath: '/',
			filename: '[name].bundle.js'
	
		},
		plugins: [
	
			new ExtractTextPlugin('[name].css'),
			new webpack.NamedModulesPlugin(),
			//new webpack.HotModuleReplacementPlugin(),
			new webpack.DllReferencePlugin({
				context: __dirname,
				manifest: require('./wwwroot/dist/vendor-manifest.json')
		})
		].concat(isDevBuild ? [
			// Plugins that apply in development builds only
			new webpack.SourceMapDevToolPlugin({
					filename: '[file].map', // Remove this line if you prefer inline source maps
					moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
			})
	] : [
			// Plugins that apply in production builds only
			new webpack.optimize.UglifyJsPlugin()
	])
	});
return [conf];
};
