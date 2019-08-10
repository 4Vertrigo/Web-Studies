//operator ... rest/spread
//i can use rest like a parameter of functions

//using spread as object
const employee = {
    name: 'Mary',
    salary: 12348.99
}

const clone = {
    active: true,
    ...employee
}

console.log(clone)

//using spread as array
const groupA = ['John', 'Peter', 'Glory']
const finalGroup = ['Mary', ...groupA, 'Rafaela']
console.log(finalGroup)