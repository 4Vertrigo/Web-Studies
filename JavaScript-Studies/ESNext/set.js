//don't accept repetition/isn't indexed

const teams = new Set()
teams.add('Vasco')
teams.add('Sao Paulo').add('Palmeiras').add('Corinthians')
teams.add('Flamengo')
teams.add('Vasco')

console.log(teams)
console.log(teams.size)
console.log(teams.has('vasco'))
console.log(teams.has('Vasco'))
teams.delete('Flamengo')
console.log(teams.has('Flamengo'))

const names = ['Raquel', 'Jonas', 'Julia', 'Jonas']
const namesSet = new Set(names)
console.log(namesSet)