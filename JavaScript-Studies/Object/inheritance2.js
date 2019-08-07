//prototype chain
Object.prototype.attr0 = '0' //don't do it
const grandFather = {attr1: 'A'}
const father = {__proto__: grandFather, attr2: 'B', attr3: '3'}
const son = {__proto__: father, attr3: 'C'}

console.log(son.attr0, son.attr1, son.attr2, son.attr3)

const car = {
    actualSpeed: 0,
    maximumSpeed: 200,
    accelerate(acceleration){
        if(this.actualSpeed + acceleration <= this.maximumSpeed)
            this.actualSpeed += acceleration
        else
            this.actualSpeed = this.maximumSpeed
    },
    status(){
        return `${this.actualSpeed}Km/h of ${this.maximumSpeed}Km/h`
    }
}

const ferrari = {
    mdoel: 'F40',
    maximumSpeed: 324 //shadowing
}

const volvo = {
    model: 'V40',
    status(){
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accelerate(100)
console.log(volvo.status())

ferrari.accelerate(300)
console.log(ferrari.status())