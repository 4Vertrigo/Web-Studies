//Arrow function
const sum = (a, b) => a + b
console.log(sum(2,3))

//Arrow function (this)
const lexicon1 = () => console.log(this === exports)
const lexicon2 = lexicon1.bind({})
lexicon1()
lexicon2()

//default parameter
function log(text = 'Node'){
    console.log(text)
}

log()
log('Im more strong')

//rest operator
function total(...numbers){
    let total = 0
    numbers.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))