const http = require('http')

const getClass = letter => {
    
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, answer => {
            let result = ''
    
            answer.on('data', data => {
                result += data
            })
            
            answer.on('end', () => {
                try
                {
                    resolve(JSON.parse(result))
                }
                catch(e)
                {
                    reject(e)
                }
            })
        })
    })
}

//Recurse of ES8
//That recurse has as objective simplify the use of promises

let obtainStudents = async () => {
    const c1 = await getClass('A')
    const c2 = await getClass('B')
    const c3 = await getClass('C')
    return [].concat(c1, c2, c3)
}//returns a object AsyncFunction

obtainStudents()
    .then(students => students.map(a => a.nome))
    .then(names => console.log(names))
