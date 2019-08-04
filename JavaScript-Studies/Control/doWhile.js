function rand(min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do
{
    option = rand(-1, 10)
    console.log(`The option choosen was ${option}.`)
}while(option != -1)

console.log('End of algorithm')