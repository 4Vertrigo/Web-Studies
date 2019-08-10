const http = require('http')

const getClass = (letter, callback) => {
    
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    
    http.get(url, answer => {
        let result = ''

        answer.on('data', data => {
            result += data
        })
        
        answer.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getClass('A', students => {
    names = names.concat(students.map(s => `A: ${s.nome}`))
    getClass('B', students => {
        names = names.concat(students.map(s => `B: ${s.nome}`))
        getClass('C', students => {
            names = names.concat(students.map(s => `C: ${s.nome}`))
            console.log(names)
        })
    })
})