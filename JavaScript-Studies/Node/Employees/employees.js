const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const women = woman => woman.genero == 'F'
const chinese = chinese => chinese.pais == 'China'
const lowestSalary = (employee, employeeActual) => employee.salario > employeeActual.salario ? employeeActual : employee

axios.get(url).then(response => {
    const employees = response.data
    
    const result = employees.filter(women).filter(chinese).reduce(lowestSalary)

    console.log(result)
    //console.log(employees)
})