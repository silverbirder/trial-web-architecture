const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        client: './src/client.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fragment.js',
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        // babelの設定
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                    },
                                ],
                                [
                                    '@babel/preset-react',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },
};