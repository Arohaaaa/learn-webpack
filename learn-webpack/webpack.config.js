const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/js/[name].js",
        clean: true,
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
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
                generator: {
                    filename: "static/images/[hash:8][ext][query]",
                },
            },
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
        ],
    },
    plugins: [],
    mode: "development",
};
