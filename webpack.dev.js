import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.common.js';
import WebpackMd5Hash from 'webpack-md5-hash';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
	publicPath: '/',
	filename: '[name].bundle.js'
    
  },
  devServer: {
	contentBase: './dist',
	hot:true,
  },
  plugins: [
	  //Hash file using MD5 so their names change when content changes.
	new WebpackMd5Hash(),
	new HtmlWebpackPlugin({
		template: './src/index.html',
		inject:true
	}),
	new ExtractTextPlugin('[name].css'),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
  ]
});


/*



*/
