for(let word of "Cod3er"){
    console.log(word)
}

const ecmaMatters = ['Map', 'Set', 'Promise']

for(let i in ecmaMatters){
    console.log(i)
}

for(let matter of ecmaMatters){
    console.log(matter)
}

const mattersMap = new Map([
    ['Map', {addressed: true }],
    ['Set', {addressed: true }],
    ['Promise', {addressed: false }]
])

for(let matter of mattersMap){
    console.log(matter)
}

for(let key of mattersMap.keys()){
    console.log(key)
}

for(let value of mattersMap.values()){
    console.log(value)
}

for(let [key, value] of mattersMap.entries()){
    console.log(key, value)
}

const s = new Set(['a', 'b', 'c'])

for(let word of s){
    console.log(word)
}