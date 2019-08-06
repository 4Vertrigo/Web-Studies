function Car(maximumSpeed = 200, acceleration = 5){

    //private attribute with let or const
    let currentSpeed = 0

    //public methods with this
    this.accelerate = () => {

        //doubt: why is this.currentSpeed undefined?
        if(currentSpeed + acceleration <= maximumSpeed)
            currentSpeed += acceleration
        else
            currentSpeed = maximumSpeed
    }

    this.getCurrentSpeed = () => currentSpeed
}

const fiatUno = new Car
fiatUno.accelerate()
console.log(fiatUno.getCurrentSpeed())

const ferrariEnzo = new Car(350, 20)
ferrariEnzo.accelerate()
ferrariEnzo.accelerate()
ferrariEnzo.accelerate()
console.log(ferrariEnzo.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrariEnzo)