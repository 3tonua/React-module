module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
            }
        }]
    }
};