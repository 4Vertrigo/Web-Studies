//Original
class Person{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`My name is ${this.name}`)
    }
}

//My Challenge
function MyPerson(nameRecived){

    let name = nameRecived

    this.speak = () => console.log(`My name is ${name}`)
}

const p = new MyPerson('John')
p.speak()