//Storing a function in a variable

const printSum = function(a, b){
    console.log(a + b)
}

printSum(2, 3)

//using the arrow function

const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))

//implict return

const subtraction = (a, b) => a - b
console.log(subtraction(2, 3))

const print = a => console.log(a)

print('Cool!!!!')