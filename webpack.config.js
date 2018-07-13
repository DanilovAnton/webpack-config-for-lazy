const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, 'public'),
};

const config = {
    entry: [PATHS.source + '/index.js'],

    output: {
        path: PATHS.build,
        filename: 'scripts/bundle.[hash:8].js',
        publicPath: '/'
    },

    devServer: {
        host: 'localhost',
        port: 3000,
        overlay: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.public + '/index.html',
            favicon: 'public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: "/styles/[name][hash:8].css",
            chunkFilename: "[id].css"
        })
    ],
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    config.devtool = production ? 'source-map' : 'eval-source-map';
    return config;
};