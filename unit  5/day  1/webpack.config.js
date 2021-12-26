const path = require('path/posix')
module.exports = {
    entry : "./src/index.js",
    output: {
        path : path.join(__dirname, "build"),
        filename: 'build.js' 
    },
    mode : "development"
}