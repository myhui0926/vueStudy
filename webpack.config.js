module.exports = {
    devtool:'eval-source-map',
    entry:__dirname+'/app/main.js',
    output: {
        path: __dirname+"/public",
        filename: "bundle.js"
    },
    devServer: {
        contentBase:'./public',
        historyApiFallback:true,
        inline:true
    },
    module:{
        rules:[
            {
                test:/(\.vue|\.js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "es2015"
                        ]
                    }
                },
                exclude:/(node_modules|\.git|\.idea)/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },{
                    loader:'css-loader'
                    }
                ]
            }
        ]
    }
}