const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


const dev = {
    mode: "development", 
    devtool: "source-map",
    entry: "./src/main.ts",
    name: "dev",
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "js/main.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        })
    ], 
    module: {
        rules: [{
            test: /\.ts$/, 
            loader: "awesome-typescript-loader"
        }]
    }
}

const prod = {
    ...dev,
    name:'prod',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: 'all'
            })
        ]
    }
}

module.exports = [dev, prod];