const printResult = grade => {

    if(grade >= 7)
        console.log('Approved!')
    else
        console.log('Disapproved!')
}

printResult(10)
printResult(4)
printResult('Epa!') //be careful

const betterAplication = grade => (grade >= 7) ? console.log('Approved!') : console.log('Disapproved!')

betterAplication(10)
betterAplication(4)