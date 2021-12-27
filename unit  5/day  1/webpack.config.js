const path = require('path/posix')
module.exports = {
    entry : "./src/index.js",
    output: {
        path : path.join(__dirname, "build"),
        filename: 'build.js' 
    },
    mode : "development",
    module:{
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test : /\.js$/,
                use : ["babel-loader"]
            },
        ]
    }
    }
