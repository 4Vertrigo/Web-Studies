const person = {
    name: 'Rebecca',
    age: 2,
    weight: 13
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'dateOfBirth', {
    enumerable: true,
    writable: false,
    value: '14/10/1997'
})

person.dateOfBirth = '01/01/2017'
console.log(person.dateOfBirth)
console.log(Object.keys(person))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 2345
console.log(obj)