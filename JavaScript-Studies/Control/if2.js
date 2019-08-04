function test1(num){

    if(num > 7)
        console.log(num) //i can write the if without parentheses but only the first line will be on the scope

    console.log('Final')
}

test1(6)
test1(8)

function test2(num){
    if(num > 7);{ //this ; is breaking the logic
        console.log(num)
    }
}

test2(6)
test2(8)