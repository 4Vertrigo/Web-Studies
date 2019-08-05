function area(height, width){
    const area = height * width

    if(area > 20)
        console.log(`Value is above allowable: ${area}m2.`)
    else
        return area
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))