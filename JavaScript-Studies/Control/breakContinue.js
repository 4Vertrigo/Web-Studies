const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('BREAK: ')
for(let x in nums)
{
    if(x == 5)
        break
    
    console.log(`${x} = ${nums[x]}`)
}

console.log('CONTINUE: ')
for(let x in nums)
{
    if(x == 5)
        continue
    
    console.log(`${x} = ${nums[x]}`)
}

extern: 
for(let x in nums)
{
    for(y in nums)
    {
        if(x == 2 && y == 3)
            break extern
        
        console.log(`Pair = ${x}, ${y}`)
    }
}