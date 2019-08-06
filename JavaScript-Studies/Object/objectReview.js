//dinamic colection of pairs key/value
const product = new Object
product.name = 'Chair'
product['brand of product'] = 'Generics'
product.price = 220

console.log(product)
delete product.price
delete product['brand of product']
console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name: 'Cristiano Ronaldo',
        age: 34,
        address: {
            street: 'Bad style',
            number: 123
        }
    },
    conductors: [{
        name: 'Lionel Messi',
        age: 32
    }, {
        name: 'Daniel Alves',
        age: 36
    }],

    calculateInsuranceAmount: function(){
        //...
    }
}

car.owner.address.number = 1000
car['owner']['address']['street'] = 'Good style'
console.log(car)

//delete car.conductors
delete car.owner.address
delete car.calculateInsuranceAmount
console.log(car)
console.log(car.conductors)
console.log(car.conductors.length)