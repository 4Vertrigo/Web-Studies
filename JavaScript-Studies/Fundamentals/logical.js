function shopping(work1, work2){
    
    const buyIceCream = work1 || work2
    const buyTelevision50 = work1 && work2
    //const buyTelevision32 = !!(work1 ^ work2) bitwise xor
    const buyTelevision32 = (work1 != work2)
    const healthy = !buyIceCream //unary operator

    return{ buyIceCream, buyTelevision50, buyTelevision32, healthy }
}

console.log(shopping(true, true))
console.log(shopping(false, true))
console.log(shopping(true, false))
console.log(shopping(false, false))
