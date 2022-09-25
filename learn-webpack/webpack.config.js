const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)/,
                type: "asset",
            },
        ],
    },
    plugins: [],
    mode: "development",
};
