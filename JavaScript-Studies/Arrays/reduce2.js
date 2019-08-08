const students = [
    {name: 'John', grade: 7.3, holder: false},
    {name: 'Mary', grade: 9.2, holder: true},
    {name: 'Peter', grade: 9.8, holder: false},
    {name: 'Ana', grade: 8.7, holder: true}
]

//Exercise 1: all students are holders?

let result = students.map(date => date.holder).reduce(function(finish, current){
    return finish && current
})

console.log(`All students are holders?: ${result}`)

//Exercise 2: some student is holders?

result = students.map(date => date.holder).reduce(function(finish, current){
    return finish || current
})

console.log(`All students are holders?: ${result}`)