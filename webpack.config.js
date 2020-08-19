const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        lr: "./src/logrocket.ts",
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
