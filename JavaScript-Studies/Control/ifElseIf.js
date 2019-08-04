Number.prototype.between = function(begin, end){

    return this >= begin && this <= end
}

const printResult = function (grade){

    if(grade.between(9, 10))
        console.log('Approved with honor')
    else if(grade.between(7, 8.99))
        console.log('Approved')
    else if(grade.between(4, 6.99))
        console.log('Recuperation')
    else if(grade.between(0, 3.99))
        console.log('Repproved')
    else
        console.log('Invalid input')

    console.log('End of algorithm')
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)