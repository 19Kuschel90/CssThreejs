module.exports = {
    mode: 'development',
    entry: "./componets/main.js",
    output: {
        filename: "./public/js/Bundle.js"
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
}