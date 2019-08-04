function rand(min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while(option != -1)
{
    option = rand(-1, 10)
    console.log(`The option choosen was ${option}.`)
}

console.log('End of algorithm')