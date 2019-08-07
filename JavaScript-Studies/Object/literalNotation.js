const a = 1
const b = 2
const c = 3

const obj1 = {
    a: a,
    b: b,
    c: c
}

const obj2 = {
    a,
    b,
    c
}

console.log(obj1, obj2)

const nameAttr = 'grade'
const valueAttr = 7.87

const obj3 = {}
obj3[nameAttr] = valueAttr
console.log(obj3)

const obj4 = {[nameAttr] : valueAttr}
console.log(obj4)

const obj5 = {

    method1: function(){

    },
    method2(){

    }
}

console.log(obj5)