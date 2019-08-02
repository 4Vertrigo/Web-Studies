const wight1 = 1.0
const wight2 = Number('2.0')

console.log(wight1, wight2)
console.log(Number.isInteger(wight1)) //1.0 is a integer but 1.1 isn't
console.log(Number.isInteger(wight2))

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * wight1 + evaluation2 * wight2
const average = total / (wight1 + wight2)

console.log(average.toFixed(2)) //like a %.2lf in C
console.log(average.toString(2)) //method to string to binary value
console.log(typeof average)
console.log(typeof Number)