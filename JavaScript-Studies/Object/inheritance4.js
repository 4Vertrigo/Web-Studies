function MyObject() {}
console.log(MyObject.prototype)
const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.name = 'Anonymous'

MyObject.prototype.speak = function() {
    console.log(this == module.exports)
    console.log(`Hello there! My name is ${this.name}!`)
}

obj1.speak()

obj2.name = 'Rafael'
obj2.speak()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name = 'Obj3'
obj3.speak()


//summarizing everything
console.log((new MyObject).__proto__ === MyObject.prototype)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)