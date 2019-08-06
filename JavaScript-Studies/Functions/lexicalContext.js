const value = 'Global'

function myFunction(){
    console.log(value)
}

function execution(){
    const value = 'Local'
    myFunction()
}

execution()