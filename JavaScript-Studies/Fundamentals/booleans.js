let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) //converting numbers to booleans

console.log('Behave like true values...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//i need just one character
console.log(!![])
console.log(!!{})
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('Behave like false values...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('to finally...')
console.log(!!('' || null || 0 || ' '))

let name = ''
console.log(name || 'Unknown')

name = 'Jonas'
console.log(name || 'Unknown')