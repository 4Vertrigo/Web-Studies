class GrandFather{

    constructor(lastName){
        this.lastName = lastName
    }
}

class Father extends GrandFather{

    constructor(lastName, carrer = 'Teacher'){
        super(lastName)
        this.carrer = carrer
    }
}

class Son extends Father{
    constructor(){
        super('Silva')
    }
}

const son = new Son
console.log(son)