// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



/** @type {import("webpack").Configuration} */
const config = {
    entry: './src/assets/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: "js/[name].js",
        ssetModuleFilename: "[path][name][ext]", // Keep file name
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },

        ],
    },

    devtool: "source-map",
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin(MiniCssExtractPlugin.filename('[name].css')));
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
