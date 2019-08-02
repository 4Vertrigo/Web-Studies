function rand({min = 0, max = 1000}){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max: 5, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) i need define a object