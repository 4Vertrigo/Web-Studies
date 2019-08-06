//in this case, 'this' always will belong to the global parameter
class Person{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person('John')
p1.speak()

//in this case the 'this' is defined already, so, everytime that i call that the 'this' will belong to the object
const cratePerson = name => {
    return{
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = new Person('John')
p2.speak()

//put this code on browser with onclick callback and see what will happen