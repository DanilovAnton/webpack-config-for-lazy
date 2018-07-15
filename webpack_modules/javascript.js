// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJSPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true
    //         })
    //     ]
    // }
});