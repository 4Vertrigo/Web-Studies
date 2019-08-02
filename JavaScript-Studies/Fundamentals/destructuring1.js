const person = {
    name: 'Ana',
    age: 5,
    address:{
        street: 'Bad Style',
        number: 1000
    }
}

const { name, age } = person
console.log(name, age)

const { name: n, age: a } = person
console.log(n, a)

const { lastName, goodMood = true} = person
console.log(lastName, goodMood)

const{ address: { street, number, zipCode } } = person
console.log(street, number, zipCode)

/*const { account: { agency, number} } = person
console.log(agency, number)*/