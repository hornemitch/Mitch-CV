module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
        {test: /\.less$/,loader: "style!css!less"},
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        { test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        { test: /\.jss$/, loader: 'babel-loader' },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&minetype=image/jpg" }
        ]
    }
};