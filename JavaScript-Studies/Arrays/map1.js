const nums = [1, 2, 3, 4, 5]

//For with a purpose
let result = nums.map(function(e){
    return e * 2
})

console.log(result, nums)

const add10 = e => e + 10
const triple = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(add10).map(triple).map(toMoney)

console.log(result)