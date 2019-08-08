const school = [{
    name: 'Class M1',
    students: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Class M2',
    students: [{
        name: 'Rebecca',
        grade: 8.9
    }, {
        name: 'Robert',
        grade: 7.3
    }]
}]

const getStudentGrade = student => student.grade
const getClassGrade = classM => classM.students.map(getStudentGrade)

const grades1 = school.map(getClassGrade)
console.log(grades1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getClassGrade)
console.log(grades2)