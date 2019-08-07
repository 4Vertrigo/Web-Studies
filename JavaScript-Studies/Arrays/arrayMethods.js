const racePilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
racePilots.pop() //massa has broken the car
console.log(racePilots)

racePilots.push('Verstappen')
console.log(racePilots)

racePilots.shift() //remove the first
console.log(racePilots)

racePilots.unshift('Hamilton')
console.log(racePilots)

//splice can add and remove elements

//add

racePilots.splice(2, 0, 'Bottas', 'Massa')
console.log(racePilots)

//remove
racePilots.splice(3,1) //Massa's car has broken again :(
console.log(racePilots)

const someRacePilots1 = racePilots.slice(2) //new array
console.log(someRacePilots1)

const someRacePilots2 = racePilots.slice(1, 4)
console.log(someRacePilots2)