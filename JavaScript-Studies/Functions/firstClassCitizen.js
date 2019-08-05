//Function in JavaScript is first-class object (Citizens)
//Higher-order function

//Creating a function literally
function func1() {}

//Storing a function in a variable
const func2 = function() {}

//Storing a function in a array
const array = [function (a,b) {return a + b}, func1, func2]
console.log(array[0](2,3))

//Storing the attribute in a object
const obj = {}
obj.speak = function () {return 'Hello'}
console.log(obj.speak())

//Passing a function like a parameter
function run(func){
    func()
}

run(function() {console.log('Executing...')})

//A function can return a outher function
function sum(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

sum(2, 3)(4)