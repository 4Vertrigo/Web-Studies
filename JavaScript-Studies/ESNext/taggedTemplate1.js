//tagged templates - it process the template inside of a function

function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Outher string'
}

const student = 'Gui'
const status = 'Approved'
console.log(tag `${student} is ${status}`)