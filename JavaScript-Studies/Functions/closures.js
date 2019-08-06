//Closure is the scope created when a function is declared
//This scope enable a function to access and to manipule extern variables to that function

//Lexical context in action!

const x = 'Global'

function outside(){
    const x = 'Local'
    function inside(){
        return x
    }

    return inside
}

const myFunction = outside()
console.log(myFunction())