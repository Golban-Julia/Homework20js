const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");   
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "My App",
            template: path.resolve(__dirname, "./src/template.html")
        }),
        new CleanWebpackPlugin()
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    cache: false
};