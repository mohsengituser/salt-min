const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for your file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'salt-ds-core.min.js', // Minified output file
        library: 'SaltDSCore', // Global variable name for the library
        libraryTarget: 'umd', // Universal Module Definition
        globalObject: 'this', // Ensures compatibility in various environments
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile modern JavaScript and JSX
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'production', // Minifies the output
    externals: {
        react: 'React', // External React
        'react-dom': 'ReactDOM', // External ReactDOM
        'react/jsx-runtime': 'react/jsx-runtime', // External JSX runtime
    }    
};
