module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                use :'ts-loader', 
                test: /\.ts/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}