const moduleA = require('../../moduleA')
console.log(moduleA.hello)

const hello = require('helloThere')
console.log(hello.hello)

const c = require('./FolderC')
console.log(c.hello2)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Hello there!')
    res.end()
}).listen(8080)