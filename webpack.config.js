const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'salt-ds-core.min.js',
        library: 'SaltDSCore',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS to a separate file
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'salt-ds-core.min.css', // Extracted CSS file
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'production',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'react/jsx-runtime',
    },
};
