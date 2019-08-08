const students = [
    {name: 'John', grade: 7.3, holder: false},
    {name: 'Mary', grade: 9.2, holder: true},
    {name: 'Peter', grade: 9.8, holder: false},
    {name: 'Ana', grade: 8.7, holder: true}
]

console.log(students.map(a => a.grade))

const result = students.map(a => a.grade).reduce(function(count, current){
    console.log(count, current)
    return count + current
}, 10)

console.log(result)