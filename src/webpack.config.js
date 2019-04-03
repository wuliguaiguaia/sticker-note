let webpack = require("webpack");
let path = require("path");
module.exports = {
    mode:"development",
    entry: path.join(__dirname,'/js/app/index.js'),
    output: {
        path: path.join(__dirname,'../public'),
        filename: 'js/index.js'
    },
    module:{
        rules:[{
            test:/\.scss$/,
            use:,
        }]
    },
    resolve:{
        alias:{
            jquery:path.join(__dirname,"js/lib/jquery.js"),
            module:path.join(__dirname,js/module),
            sass:path.join(__dirname,"sass")
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery"
        })
    ]
}
 