function getPrice(impost = 0, currency = 'R$'){
    return `${currency} ${this.price * (1 - this.desc) * (1 + impost)}`
}

const product = {
    name: 'Nootebook',
    price: 4589,
    desc: 0.15,
    getPrice
}

global.price = 20
global.desc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = {price: 49990, desc: 0.20}
console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '$')) //first parameter is the context and the outhers is the normal parameters
console.log(getPrice.apply(global, [0.17, '$'])) //i need pass a vector with the normal parameters