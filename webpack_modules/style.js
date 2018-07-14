const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = mode => ({
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: mode === 'development' ? '[name].css' : '/styles/[name].[hash:8].css',
    //         chunkFilename: mode === 'development' ? '[id].css' : '/styles/[id].[hash:8].css'
    //     })
    // ]
});