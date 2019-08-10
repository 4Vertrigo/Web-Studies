//let and const

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) //b has block scope

//Template String
const product = 'iPad'
console.log(`${product} is so expensive!`)

//Destructuring
const [w, o, ...rds] = "Cod3r"
console.log(w, o, rds)
const[x, , y] = [1, 2, 3]
console.log(x, y)

const{
    age: i,
    name
} = {
    name: 'Ana',
    age : 9
}

console.log(i, name)