const Path = require ('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template:Path.resolve(__dirname,'App/index.html'),
    filename: 'index.html',
    inject: 'body'
});
const config={
    entry: Path.resolve(__dirname,'App/index.js'),
    output:{
        path:Path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                loaders:['babel-loader'],
                exclude: /node_modules/,
                include:Path.resolve(__dirname,'App')
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader','css-loader']
            }
            ]
    },
    plugins: [HtmlWebpackPluginConfig]

};
module.exports = config;