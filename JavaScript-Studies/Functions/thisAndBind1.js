const person = { 
    salutation: 'Good morning!',
    speak(){
        console.log(this.salutation)
    }
}

person.speak()
const speak = person.speak
speak() //conflict between paradigms: functional and OO

const toSpeakOfPerson = person.speak.bind(person)
toSpeakOfPerson() //i can resolve this conflict with bind functions