const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//without callbacks

let lowGrades = []
for(let i in grades)
    if(grades[i] < 7)
        lowGrades.push(grades[i])

console.log(lowGrades)

//with callbacks
const lowGradesCallback = grades.filter(function (grade) {
    return grade < 7
})

console.log(lowGradesCallback)

const lowGradesCallbackArrow = grades.filter(grade => grade < 7)

console.log(lowGradesCallbackArrow)