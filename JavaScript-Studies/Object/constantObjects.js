//person -> 123 -> {...}
const person = {name: 'John'}
person.name = 'Pedro'
console.log(person)

//person -> 456 -> {...}
//person = {name: 'Ana'} i can't change the object reference

Object.freeze(person)

person.name = 'Mary'
person.address = 'Bad style'
delete person.name

console.log(person.name)
console.log(person)

const constantPerson = Object.freeze({name: 'Joao'})
constantPerson.name = 'Maria'
console.log(constantPerson)