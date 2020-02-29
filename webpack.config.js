const LogSomeStuff = require('./LogSomeStuff.js')
const path = require('path')

module.exports = {
    plugins: [new LogSomeStuff()],
    entry: './entry',
    mode: 'development',
    output: {
        path: path.resolve(__dirname),
        filename : 'bundle.js'
    },
};