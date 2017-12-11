const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        entry: {
            vendor: [
                'jquery',
               
                'uikit',
                'uikit/dist/js/uikit-icons',
                'vue',
                'moment',
                './ClientApp/GlobalAssets/Css/style.scss',
                './ClientApp/GlobalAssets/Css/custom.css',
            ]
        },
       // target: 'web',
        stats: { modules: false },
        resolve: { extensions: [ '.js' ] },
        module: {
            rules: [
                { test: /\.(jpg|jpeg|gif|png|svg|woff|woff2|eot|ttf|otf)(\?|$)/, use: 'url-loader?limit=10000' },
                
            ]
        },
        
        output: {
            publicPath: 'wwwroot/dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        plugins: [
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), //Check if any plugin requires jQuery
        ]
    };

    const clientBundleConfig = merge(sharedConfig, {
        output: { path: path.join(__dirname, 'wwwroot', 'dist') },
        module: {
            rules: [
               { test: /\.css(\?|$)/, use: extractCSS.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) },
               //{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
               {test: /.scss$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: ["css-loader", "sass-loader"]})}
            ]
            
        },
        plugins: [
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

  

    return [clientBundleConfig];
};
