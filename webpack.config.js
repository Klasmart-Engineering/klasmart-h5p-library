const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "xapi-uploader": "./src/xapi-uploader.ts",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "h5p/core/js")
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    plugins: []
};
