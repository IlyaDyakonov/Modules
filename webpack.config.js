const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExctractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExctractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "main.html"
        }),
        new MiniCSSExctractPlugin()
    ]
}