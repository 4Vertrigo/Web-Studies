const students = [
    {name: 'John', grade: 7.9},
    {name: 'Mary', grade: 9.2}
]

//imperative
let total1 = 0
for(let i = 0; i < students.length; i++){
    total1 += students[i].grade
}

console.log(total1 / students.length)

//declarative
const getGrade = student => student.grade
const sum =(total, actual) => total + actual
const total2 = students.map(getGrade).reduce(sum)
console.log(total2 / students.length)