const ferrari = {
    model: 'F40',
    velMax: 324
}

const volvo = {
    model: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MyObject(){}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)