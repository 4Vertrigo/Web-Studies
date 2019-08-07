//Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any',
    price: 1.99,
    tag: 'sale'
})

console.log('Extensive: ', Object.isExtensible(product))

product.name = 'Eraser'
product.description = 'White eraser'
delete product.tag
console.log(product) //i can delete and modify fields, but i can't add more fields

//Object.seal
const person = {
    name: 'Juliana',
    age: 35
}
Object.seal(person)
console.log('Seal: ', Object.isSealed(person))

person.lastName = 'Silva'
delete person.name
person.age = '29'
person.weight = 59
console.log(person) //i can just modify the fields

//Object.freeze //i can't do nothing
