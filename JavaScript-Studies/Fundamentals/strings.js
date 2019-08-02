const school = "usp"

console.log(school.charAt(1))
console.log(school.charAt(3))
console.log(school.charCodeAt(0))
console.log(school.indexOf('u'))

console.log(school.substring(1))
console.log(school.substring(0, 3))

console.log('Universidade '.concat(school).concat("!"))
console.log('Universidade ' + school + "!")
console.log(school.replace('p', 'picio'))

console.log('Ana, Mary, Peter'.split(','))