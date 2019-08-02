//pair name/value
const hello = 'There' //lexicon context 1

function exec() {
    const hello = 'Hi'
    return hello
}

//Objects are nested groups of pairs name/value

const client = {
    name: 'Peter',
    age: 32,
    weight: 90,
    address: {
        street: 'Bad style',
        number: 123
    },
    height: 1.80
}

console.log(hello)
console.log(exec())
console.log(client)