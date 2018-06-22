const path = require('path')

module.exports = {
    mode: 'development',
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: 'App.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
}