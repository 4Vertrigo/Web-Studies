const fs = require('fs')

const way = __dirname + '/archive.json'

//synchronous...

const content = fs.readFileSync(way, 'utf-8')
console.log(content)

//asynchronous

fs.readFile(way, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./archive.json')
console.log(config.db)

fs.readdir(__dirname, (err, archives) => {
    console.log('Content of dir...')
    console.log(archives)
})