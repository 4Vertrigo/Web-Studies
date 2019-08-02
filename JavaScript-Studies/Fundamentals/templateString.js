const name = 'Rebecca'
const concat = 'Hello ' + name + '!'

const template = `
    Hello
    ${name}!`

console.log(concat, template)

//expressions...
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase() //i'm assigning up to a function
console.log(`Hey... ${up('be careful')}`)