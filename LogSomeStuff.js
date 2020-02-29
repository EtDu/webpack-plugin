class LogSomeStuff {
    apply(compiler) {
        compiler.hooks.emit.tapPromise("LogSomeStuffPlugin", compilation => {
            return new Promise((resolve, reject) => {
                compilation.chunks.forEach(chunk => {
                    chunk.files.forEach(filename => {
                        compilation.assets[filename].source = () => { return "console.log('SHOOOOOP')" }
                        console.log(compilation.assets[filename].source())
                    });
                })
                resolve()
            })
        })
    }
}

module.exports = LogSomeStuff